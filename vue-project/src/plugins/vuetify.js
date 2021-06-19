// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#E91E63", // #E53935
        secondary: "#F06292", // #FFCDD2
        accent: "#42A5F5", // #3F51B5
      },
    },
  },
})