<template>
  <div class="about">
    <h1>ログイン成功</h1>
    <button @click="signout">サインアウト</button>
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
  created(){
        this.getstatus()
  },
  methods:{
    signout: function(){
      firebase.auth().signOut()
      this.$router.push('/')
    },
    getstatus(){
      firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    this.username = user.email;
    console.log('テスト'+user.email)
    this.test = true
    
    // ...
  } else {
    // User is signed out.
    // ...
  }
});
    }
  
  }
}
</script>

<style>

</style>
