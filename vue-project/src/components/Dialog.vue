<template>
  <div>   
    <v-card>
        <v-layout
          justify-center
          align-center
          fill-height
        >
          <v-img 
          :src=dogImage
          />
        </v-layout>
      </v-card>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data () {
    return {
     dogImage: []      
    }
  },
  mounted() {
    axios.get("https://dog.ceo/api/breeds/image/random", {
      headers: {
        "Content-Type": "application/json",
      }
    }).then(response => {
      this.dogImage = response.data.message
    }) 
  }
}
</script>