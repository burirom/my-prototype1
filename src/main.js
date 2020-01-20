import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBXTjVS6D5dTIaYxj-Op_DbscPxwkXpgoc",
  authDomain: "my-prototype-e3d6a.firebaseapp.com",
  databaseURL: "https://my-prototype-e3d6a.firebaseio.com",
  projectId: "my-prototype-e3d6a",
  storageBucket: "my-prototype-e3d6a.appspot.com",
  messagingSenderId: "815432719737",
  appId: "1:815432719737:web:c79e554f04711299b1a3a8",
  measurementId: "G-8626Q5V18W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
