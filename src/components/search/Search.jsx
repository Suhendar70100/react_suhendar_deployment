import { useState } from "react";
import Card from "../card/Card";
import "../search/Search.css"
import { useNavigate } from "react-router-dom";
export default function Search() {
    const [inputText, setInputText] = useState("");
    const navigate = useNavigate();
    return (
        <>
            <div className="text-center">
                <form method="get" action="#">
                    <input
                        onChange={(e) => setInputText(e.target.value.toLowerCase())}
                        type="text"
                        className="search" />
                </form>
            </div>
            <div>
                <Card input={inputText} />
            </div>
            <div className="btnGroup" style={{ display: "flex", padding: "40px", justifyContent: "end" }}>
                <button type="button" onClick={() => navigate('/products')}
                    style={{ backgroundColor: "#0D6EFD", border: "none", color: "#FFFFFF", borderRadius: "10px", width: "100px" }}>Load More</button>
            </div>
        </>
    )
}