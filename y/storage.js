document.addEventListener("DOMContentLoaded", (event) => {
    const app = firebase.app();
  
    const db = firebase.firestore();
  
    const productsRef = db.collection("products");
  
    const query = productsRef.where("price", ">", 100);
  
  });