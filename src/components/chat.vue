<template>
  <div>
    <ul>
      <li
        v-for="chat in  this.comments"
        :key="chat.id"
      >ユーザー名：{{chat.username}} メッセージ：{{chat.message}}</li>
    </ul>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      comments: [],
      db: null
    };
  },
  created() {
    this.db = firebase.firestore();
    this.read_db();
  },
  methods: {
    read_db() {
    //   this.comments = [];
    //   this.db
    //     .collection("users")
    //     .get()
    //     .then(querySnapshot => {
    //       querySnapshot.forEach(doc => {
    //         this.comments.push(doc.data());
    //         console.log(this.comments);
    //       });
    //     });


    this.db.collection('users').onSnapshot(querySnapshot => {
         this.comments = [];
      querySnapshot.forEach(doc =>{
         
        this.comments.push(doc.data());
      })
    })
    }
  }
};
</script>

<style>
</style>