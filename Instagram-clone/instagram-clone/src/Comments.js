import React, { useState, useEffect } from 'react'
import { Input, Button } from '@material-ui/core'
import './Comments.css';
import { db, auth } from './firebase';
import firebase from 'firebase';

function Comments({ id}) {
    const [ comment, setComment ] = useState('');
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState('');
    const [commentsList, setCommentsList] = useState([]);

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

    useEffect(() => {
        db
        .collection('posts')
        .doc(id)
        .collection('comments')
        .orderBy('timestamp',"desc")
        .onSnapshot((snapshot)=>
        setCommentsList(snapshot.docs.map(doc=>
            (doc.data())
            )))
    }, [id])

    const postComment = (event) => {
        event.preventDefault();
        db
        .collection('posts')
        .doc(id)
        .collection('comments')
        .add({
            username: username,
            comment: comment,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setComment('');
    }
    return (
        <div className="comments" >
            <form className="comments__input" >
                <Input className="comments__comment" value={comment} onChange={(e)=> setComment(e.target.value)} placeholder="Post a comment..."></Input>
                <Button type="submit" className="comments__post" variant="contained" color="primary" onClick={postComment} >Post</Button>
            </form>
            <div className="comments__list" >
                {commentsList.map(comment=>
                    <ul>{comment.username}: {comment.comment}</ul>)}

            </div>
        </div>
    )
}

export default Comments
