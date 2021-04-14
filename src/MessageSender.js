import React, {useState} from 'react';
import "./MessageSender.css";
import {Avatar} from "@material-ui/core";



//posten in firebase mogelijk maken
import db from "./firebase";
import firebase from "firebase";


function MessageSender() {

    //States voor de FireBase
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        //code toevoegen voor posten
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: null,
            username: null,
            image: imageUrl,
            //deze info komt uit google account bij hem
            //profilePic: user.photoURL,
            //username: user.displayName,

        })

        setInput("");
        setImageUrl("");


    };



    return (
        <div className='messageSender'>
            <div className="messageSender_top">
                {/*<Avatar />*/}
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="messageSender_input"
                        placeholder={`What's on your mind?`}
                    />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="image URL (Optional)" />

                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>

            <div className="messageSender_bottom">
                <p>Doe mee aan de fotowedstrijd (ik verloot elke maand een weekendje weg) of laat gewoon een leuk berichtje achter!</p>


            </div>

        </div>

    )
}

export default MessageSender;
