import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from "firebase/app";

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyDj0fJPo0_0tz-mtS2M-GKmVe5-lktBFDw",
  authDomain: "aisyndicate.firebaseapp.com",
  projectId: "aisyndicate",
  storageBucket: "aisyndicate.appspot.com",
  messagingSenderId: "600945453176",
  appId: "1:600945453176:web:23dc037617932ef533258d"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app')
  }
})

