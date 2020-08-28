import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';

function Post({ username, imageUrl, caption, id, key }) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar className="post__avatar" alt="Ajay krishna A" src="/static/images/avatar/1.jpg" />
                <h3>{username}</h3>
            </div>
            <img className="post__image" src={imageUrl} alt=""></img>
            
            <h4 className="post__caption">{caption}</h4>
            
        </div>
    )
}

export default Post
