document.addEventListener("DOMContentLoaded", (event) => {
    // check to ensure firebase is available
    const app = firebase.app();
   
  });

function uploadFile(files) {
    const storageRef = firebase.storage().ref();
    const imgRef = storageRef.child("myimage.jpg");
    const file = files.item(0);
    const task = imgRef.put(file);
    
        task.then(snapshot => {
            console.log(snapshot);
            imgRef.getDownloadURL().then(url => {
                document.querySelector("#imgUpload").setAttribute("src", url)
            })
        })
    }