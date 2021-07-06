<template>
  <v-app>
    <Header/>
    <Navigation/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import Navigation from '@/components/Navigation.vue'
export default {
  name: 'App',

  components: {
    Header,
    Navigation
  },

  data: () => ({
    //
  }),
};
</script>
