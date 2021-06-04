<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="3"></v-col>
        <v-col cols="6">
          <h1 class="text-center">この犬かわいい？</h1>
          <v-img :src=dogImage></v-img>
        </v-col>
        <v-col cols="3"></v-col>
      </v-row>
      <v-row>
        <v-col cols="3"></v-col>
        <v-col cols="2">
          <v-btn @click="cute(dogImage)" block color="pink" dark>かわいい</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn @click="change" block>どちらでもない</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn @click="notCute(dogImage)" block color="blue" dark>ん～？</v-btn>
        </v-col>
        <v-col cols="3"></v-col>
      </v-row>
    </v-container>
    <v-conainer>
      <v-row>
        <v-col cols="3"></v-col>
        <v-col cols="3">
          <h2 class="text-center">かわいい犬</h2>
          <div v-for="cute in cuteDogImage" :key="cute">
            <v-img :src=cute></v-img>
          </div>
        </v-col>
        <v-col cols="3">
          <h2 class="text-center">そうでもない犬</h2>
          <div v-for="notCute in notCuteDogImage" :key="notCute">
            <v-img :src=notCute></v-img>
          </div>
        </v-col>
        <v-col cols="3"></v-col>
      </v-row>
    </v-conainer>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return{
      dogImage: [],
      cuteDogImage: [],
      notCuteDogImage: [],
    }
  },
  mounted(){
    const url = 'https://dog.ceo/api/breeds/image/random'
    axios.get(url, {
      headers: { 
        "Content-Type": "application/json", 
      } 
    }).then(response => {
      this.dogImage = response.data.message
    })
  },
  methods: {
    change: function(){
      const url = 'https://dog.ceo/api/breeds/image/random'
      axios.get(url, {
        headers: { 
          "Content-Type": "application/json", 
        } 
      }).then(response => {
        this.dogImage = response.data.message
        console.log(this.dogImage)
      })
    },
    cute: function(dogImage){
      this.cuteDogImage.push(dogImage)
      this.change()
    },
    notCute: function(dogImage){
      this.notCuteDogImage.push(dogImage)
      this.change()
    },
  }
}
</script>
