import React, { useState } from 'react';
import "../paragraph/ImageParagraph.css"
import Logo from "../../assets/img/logo.png"
import { Article } from "../../mockData"
export default function ImageParagraph() {
    const [show, setShow] = useState(true);

    const textEnglish = () => {
        return (
            <>
                <h3>{Article.title.en}</h3>
                <p>{Article.description.en}</p>
            </>
        )
    }
    const textIndonesia = () => {
        return (
            <>
                <h3>{Article.title.id}</h3>
                <p>{Article.description.id}</p>
            </>
        )
    }
    return (
        <>
            <div className="text-center text">
                <img src={Logo} alt="logo" />
                {show ? textEnglish() : textIndonesia()}
                <div style={{ display: "inline" }}>
                    <button type="button" style={{ margin: "10px" }} onClick={() => setShow(!show)} className="btn btn-light">Translate</button>
                    <button type="button" style={{ margin: "10px" }} onClick={() => console.log(Math.floor(Math.random() * 10000))} className="btn btn-light">Random</button>
                </div>

            </div>
        </>
    )
}