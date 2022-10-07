import React from "react";
import "./Header.css"

function Header() {
    return (
        <header className="header">
            <img className="header-image" src="./troll-face.png" />
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-project">React Course - Project 3</h4>
        </header>
    )
}

export default Header