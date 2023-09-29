import React, {useState} from "react";

function Track(props){
    return (
        <div>
            <h3>{props.title} </h3>
            <p>Artist: {props.artist} </p>
            <p>Album: {props.album} </p>
        </div>
    )
}

export default Track;