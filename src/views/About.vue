<template>
  <div class="about">
    <h1>ログイン成功</h1>
    <button @click="signout">サインアウト</button>
    <button @click="getstatus">ユーザー情報の取得</button>
    <h1 v-if="test">{{this.username}}</h1>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data : function(){
    return{
      username: null,
      test:false

    }
  },
  cureate(){
  },
  methods:{
    getstatus:function(){
      firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    this.username = user.email;
    console.log(user.email)
    this.test = true
    
    // ...
  } else {
    // User is signed out.
    // ...
  }
});
    },
    signout: function(){
      firebase.auth().signOut()
      this.$router.push('/')
      this.username = null,
      this.test = false
    }
  }
}
</script>

<style>

</style>
