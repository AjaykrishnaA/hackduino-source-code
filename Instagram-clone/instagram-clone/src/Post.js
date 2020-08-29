import React from 'react';
import './Post.css';
import { Avatar, Tooltip, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Comments from './Comments';
import { db, storage } from './firebase';

function Post({ username, imageUrl, caption, id, key }) {
    const deletePost = (event) => {
        db.collection('posts').doc(id).delete();
        storage.refFromURL(imageUrl).delete()
        .then(function() {
            console.log('File deleted successfully');
        }).catch(function(error) {
            alert(error.message);
        });
    }
    return (
        <div className="post">
            <div className="post__header">
                <Avatar className="post__avatar" alt={username} src="https://firebasestorage.googleapis.com/v0/b/instagram-clone-15d14.appspot.com/o/Screenshot_2019-12-05-10-44-19-970_com.miui.gallery.jpg?alt=media&token=d0a10f95-cc20-4577-83bb-31f7d906631a" />
                <h3>{username}</h3>
                <Tooltip title="Delete" >
                    <IconButton aria-label="delete">
                        <DeleteIcon 
                        onClick={deletePost} />
                    </IconButton>
                </Tooltip>
            </div>
            <img className="post__image" src={imageUrl} alt=""></img>
            
            <h4 className="post__caption">{caption}</h4>
            <Comments id={id} />
        </div>
    )
}

export default Post
