<template>
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

      <v-list
        dense
        nav
      >
        <v-list-item
         to="/dashboard"
        >
         <v-list-item-content>
            <v-list-item-title>
              <v-icon
                class="pr-2"
                color="secondary"
              >
              mdi-view-dashboard
            </v-icon>
              Dashboard
            </v-list-item-title>
         </v-list-item-content>
        </v-list-item>

        <v-list-item
         to="/dog"
        >
         <v-list-item-content>
            <v-list-item-title>
              <v-icon
                class="pr-2"
                color="secondary"
              >
              mdi-dog
            </v-icon>
              Dog
            </v-list-item-title>
         </v-list-item-content>
        </v-list-item>

        <v-list-item
         to="/"
        >
         <v-list-item-content>
            <v-list-item-title>
              <v-icon
                class="pr-2"
                color="secondary"
              >
              mdi-home-variant-outline
            </v-icon>
              Home
            </v-list-item-title>
         </v-list-item-content>
        </v-list-item>

        <v-list-item
         to="/about"
        >
         <v-list-item-content>
            <v-list-item-title>
              <v-icon
                class="pr-2"
                color="secondary"
              >
              mdi-information-outline
            </v-icon>
              About
            </v-list-item-title>
         </v-list-item-content>
        </v-list-item>  


      </v-list>
    </v-navigation-drawer>
  </v-sheet>
    </v-navigation-drawer>
</template>