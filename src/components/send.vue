<template>
  <div>
    <input type="text" v-model="message" />
    <button @click="send_btn">送る</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  props: {
      username:{
           type: String
      }
  },
  data() {
    return {
      message: "",
       db: null
    };
  },
  
  created() {
      this.db = firebase.firestore();
  },
  methods: {
    send_btn: function() {
      this.add_db();
    },
    add_db() {
      this.db
        .collection("users")
        .add({
          username: this.username,
          message: this.message
          
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    }
  }
};
</script>

<style>
</style>