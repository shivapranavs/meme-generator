import React, { useState } from "react";
import "./Meme.css";
import memesData from "./memesData";

function Meme() {
    const [meme,setMeme] = useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImage,setAllMemeImage] = useState(memesData)

    function getMemeImage() {
        const memeArray = allMemeImage.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        setMeme(prevImage => ({
            ...prevImage,
            randomImage: url
        }))
    }
    return (
        <main>
            <div className="form-container">
                    <input className="input-box" placeholder="Top text" type="text" />
                    <input className="input-box" placeholder="Bottom text" type="text" />
                <button className="btn-click" onClick={getMemeImage}>Get a new Meme Image</button>
            </div> 
            <img  className="image" src={meme.randomImage} />
        </main>
    )
}

export default Meme;