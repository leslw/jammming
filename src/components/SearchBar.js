import React, {useState} from "react";

function SearchBar(){
    return (
        <div>
            <form>
                <label htmlFor="search">Search: </label>
                <input id="search"/>
            </form>
        </div>
    )
}

export default SearchBar;