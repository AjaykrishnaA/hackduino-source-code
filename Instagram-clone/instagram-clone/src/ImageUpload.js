import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { db, storage } from './firebase';
import './ImageUpload.css';
import firebase from "firebase" ;

function ImageUpload({username}) {
    const [imageCaption, setImageCaption] = useState('');
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const handleChange = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    };
    const uploadPost = (event) => {
        event.preventDefault();
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
            "state_Changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred/snapshot.totalBytes)*100
                );
                setProgress(progress);
            },
            (error) => {
                alert(error.message);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        db.collection('posts').add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: imageCaption,
                            username: username,
                            imageUrl: url,
                          });
                        setProgress(0);
                        setImageCaption('');
                        setImage(null);
                    });
            }
        );

        
      };

    return (
        <div className='imageUpload'>
            <progress value={progress} max='100' className="upload__progress" ></progress>
            <form className="imageUpload__form">
                <input type='text' placeholder='Enter a caption...' value={imageCaption} onChange={(event)=> setImageCaption(event.target.value)} /> 
                <input type='file'  onChange={handleChange} />
                <Button type='submit' onClick={uploadPost} >Post</Button>
            </form>
        </div>
    )
}

export default ImageUpload
