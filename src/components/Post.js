import React from 'react';
import "./Post.css";




function Post({ image, username, timestamp, message }) {
    return (
        <div className="post">
            <div className="post_top">
                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post_bottom">
                <p>{message}</p>
            </div>

            <div className="post_image">
                <img src={image} alt="" />
            </div>

            <div className="post_options">
                {/*Ruimte voor latere uitbreidingen*/}
            </div>
        </div>
    )
}

export default Post;
