<template>
  <div>
    <v-row>
      <v-col 
        class="mx-10 my-5 text-center"
      >
        <v-card 
          height=300px
          class="text-h3"
        >
        <v-layout
          justify-center
          align-center
          fill-height
        >
        Welcome!  
        </v-layout>
        
        </v-card> 
        <v-dialog
         v-model="welcome_dialog"
        >

        <template
         v-slot:activator="{on, attrs}"
        >
        <v-btn 
          color="accent"
          dark
          class="mx-10 my-10"
          v-bind="attrs"
          v-on="on"
        >
        Dog
        </v-btn>
        </template>

          <v-card>
            <v-layout
              justify-center
              align-center
              fill-height
            >
              Welcome!  
            </v-layout>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  date () {
    return {
     welcome_dialog: false
    }
  }
}
</script>
