import Vue from 'vue'
// import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VCarousel,
  VCard,
  VTextField,
  VTimePicker,
  VDatePicker
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VCarousel,
    VCard,
    VTextField,
    VTimePicker,
    VDatePicker
  }
})
// Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBV6ChtPTqMkcnOGRpIKclRQ9GsKYzauAs',
      authDomain: 'devmeetup-vue.firebaseapp.com',
      databaseURL: 'https://devmeetup-vue.firebaseio.com',
      projectId: 'devmeetup-vue',
      storageBucket: 'devmeetup-vue.appspot.com',
      messagingSenderId: '611107708428'
    })
  }
})