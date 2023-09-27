import React, {useState} from "react";
import Tracklist from "./Tracklist";

function Playlist(){
    const [name, setName] = useState("Playlist");

    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <div>
            <input 
            type="text" 
            value={name} 
            onChange={handleChange}/>
            <Tracklist />
        </div>
    )
}

export default Playlist;