<template>
  <div class="about">
    <h1>ログイン成功</h1>
    <button @click="signout">サインアウト</button>
    <send :username='this.username'></send>
   <chat></chat>


  </div>
</template>

<script>
import firebase from "firebase";
import chat from '../components/chat'
import send from '../components/send'

export default {
  components:{
   
    send,
     chat
  },
  data() {
    return {
      username: "",
      message: "",
      comments: [],
      db: null
    };
  },
  created() {
    this.getstatus();
  },
  methods: {
    signout: function() {
      firebase.auth().signOut();
    },
    getstatus() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          this.username = user.email;
          console.log("テスト" + user.email);
          this.test = true;
        } else {
          // User is signed out.
          this.$router.push("/");
          console.log("ログアウトしました");
          // ...
        }
      });
    },
    
  }
};
</script>

<style>
</style>
