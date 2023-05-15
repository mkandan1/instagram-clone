
import { getStorage, getDownloadURL, ref, get, uploadBytesResumable } from 'firebase/storage';
import config from '../components/FirebaseConfig'


function  upload(spaceRef, file){
    
    

    const uploadTask = uploadBytesResumable(spaceRef, file);

    uploadTask.on('state_changed', (snapshot)=>{
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, 
    (error) => {
      // Handle unsuccessful uploads
      console.log(error);
    }, 
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        const data = {url: downloadURL, username: localStorage.getItem('igusername')}
        fetch('https://instagram-clone-attack.glitch.me/updateProfile', {
        method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
      }).then((res)=> {return res.json()}).then((data)=>{
        this.setState({
          url: data.url
        })
      })
      });

    })
    
  }

  export default upload;