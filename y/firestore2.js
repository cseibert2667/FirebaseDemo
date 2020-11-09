document.addEventListener("DOMContentLoaded", (event) => {
    const app = firebase.app();
  
    const db = firebase.firestore();
  
    const productsRef = db.collection("products");
  
    const query = productsRef.where("price", ">", 100);
    // returns products in descending order of price -- .limit(1) will only return one item
    // const query = productsRef.orderBy("price", "desc").limit(1);

    query.get().then(products => {
        products.forEach(doc => {
            data = doc.data()
            document.write(`${data.name} at $${data.price} <br />`)
        })
    })
  
  });