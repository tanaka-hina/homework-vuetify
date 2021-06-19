<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      clipped-left
    >

      <v-sheet
       color="primary"
      >
        <v-card-title>
          Test Vuetify
        </v-card-title>
      </v-sheet>
    
    </v-app-bar>

    <v-navigation-drawer
      app 
      fixed 
      clipped
    >
    <v-sheet
    class="mx-auto"
  >
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Pages
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item>
         <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
         </v-list-item-content>
        </v-list-item>

        <v-list-item>
         <v-list-item-content>
            <v-list-item-title>Dog</v-list-item-title>
         </v-list-item-content>
        </v-list-item>

        <v-list-item>
         <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
         </v-list-item-content>
        </v-list-item>

        <v-list-item>
         <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
         </v-list-item-content>
        </v-list-item>  


      </v-list>
    </v-navigation-drawer>
  </v-sheet>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
