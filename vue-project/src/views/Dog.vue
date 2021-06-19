<template>
    <div>
    <h1>この犬かわいい？</h1>
    <p>{{ dogImage }}</p>
    <p>{{ cuteDogs }}</p>
    
    <v-img 
     :src=dogImage 
     width="30%" 
     height="30%"
    >
    </v-img>

    <v-btn 
     @click="addCuteDog(dogImage)"
    >
    かわいい!
    </v-btn>
    
    <v-btn 
     @click="change"
    >
    違う犬がイイ！
    </v-btn>
    
    <v-btn 
     @click="addKiraiDog(dogImage)"
    >
    ん～
    </v-btn>
    
    <h2>かわいい！</h2>
    
    <div 
     v-for="cuteDog in cuteDogs" 
     :key="cuteDog"
    >

        <v-img 
         :src=cuteDog 
         width="10%" 
         height="10%"
        >
        </v-img>

    </div>
        <h2>ん～</h2>
    <div 
     v-for="kiraiDog in kiraiDogs" 
     :key="kiraiDog"
    >

        <v-img 
         :src=kiraiDog 
         width="10%" 
         height="10%"
        >
        </v-img>
        
    </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data () {
            return {
                dogImage: [],
                cuteDogs: [],
                kiraiDogs: []
            }
        },
        mounted(){
            const url = "https://dog.ceo/api/breeds/image/random"
            axios.get(url, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                this.dogImage = response.data.message
            })
        },
        methods: {
            change: function(){
                const url = "https://dog.ceo/api/breeds/image/random"
                axios.get(url, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(response => {
                    this.dogImage = response.data.message
                })
            },
            addCuteDog: function(dogImage){
                this.cuteDogs.push(dogImage)
                this.change()
            },
            addKiraiDog: function(dogImage){
                this.kiraiDogs.push(dogImage)
                this.change()
            }
        }
    }
</script>