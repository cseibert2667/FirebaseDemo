document.addEventListener("DOMContentLoaded", (event) => {
  // check to ensure firebase is available
  const app = firebase.app();
  console.log(app);

  const db = firebase.firestore();

  const myPost = db.collection("posts").doc("firstpost");

  myPost.onSnapshot(doc => {
      const data = doc.data();
      document.querySelector("#title").innerHTML = data.title;
  })

});

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      document.write(`Hello ${user.displayName}`);
      console.log(user);
    })
    .catch(console.log)
}

function updatePost(e) {
  const db = firebase.firestore();
  const myPost = db.collection("posts").doc("firstpost");
  myPost.update({title: e.target.value});
}