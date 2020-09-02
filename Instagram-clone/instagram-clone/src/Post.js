import React, { useState, useEffect } from 'react';
import './Post.css';
import { Avatar, Tooltip, IconButton, Snackbar } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import Comments from './Comments';
import { db, storage, auth } from './firebase';

function Post({ postUsername, imageUrl, caption, id, key }) {
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser)=>{
          if(authUser){
            //user logged in...
            setUser(authUser);
            setUsername(authUser.displayName);
            // console.log(authUser);
          }else{
            setUser(null);
            //user has logged out...
          }
        }) 
        return () => {
          unsubscribe();
        }
      }, [username, user]);  

    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    const deletePost = (event) => {
        db.collection('posts').doc(id).delete();
        storage.refFromURL(imageUrl).delete()
        .then(function() {
            setOpen(true);
            console.log('File deleted successfully');
        }).catch(function(error) {
            alert(error.message);
        });
    }
    return (
        <div className="post">
            <div className="post__header">
                <Avatar className="post__avatar" alt={postUsername} src="/static/images/avatar/1.jpg" />
                <h3 className="post__username" >{postUsername}</h3>
                {user && (username===postUsername) && 
                    <Tooltip className="post__deleteIcon" title="Delete" >
                        <IconButton aria-label="delete">
                            <DeleteIcon 
                            onClick={deletePost} />
                        </IconButton>
                    </Tooltip>
                }
            </div>
            <img className="post__image" src={imageUrl} alt=""></img>
            
            <h4 className="post__caption">{caption}</h4>
            <Comments id={id} />
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message="✔ Post deleted successfully"
                action={
                <React.Fragment>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
                }
            />
        </div>
    )
}

export default Post
