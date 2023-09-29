import React, {useState} from "react";
import Tracklist from "./Tracklist";

function SearchResults(props){

    return (
        <div>
            <h2> Search Results</h2>
            <Tracklist tracklist={props.tracks} onItemClick={props.onAddTrack} />
        </div>
    )

}

export default SearchResults;