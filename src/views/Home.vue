<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>テストです
       <form action="">
           <input type="text" placeholder='Username'
                        v-model='username'>
            <input type="text" v-model="password" placeholder="password">
       </form>
       <button @click='signIn'>signin</button>
    
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase'


export default {
  name: 'home',
  components: {
    
  },
 
  methods: {
            signIn: function () {
                //サインイン処理
                
                firebase.auth().signInWithEmailAndPassword(this.username, this.password).then((user) => {
                    if(user){
                      this.$router.push('/about')
                    }   
                }).catch(function(error) {
                    if (error.code === 'auth/wrong-password') {
                     alert('パスワードが違います');
                    } else {
                        alert(error.message);
                    } 
                }
                )
                
            },
           
        },
        data() {
            return {
                username: '',
                password: ''
            }
        }
}
</script>
