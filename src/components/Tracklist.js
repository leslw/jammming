import React, { useState } from "react";
import Track from "./Track";

function Tracklist(props) {
  const [selected, setSelected] = useState([]);

  function handleClick(item) {
    const clickedItemId = item.id;

    if (selected.includes(clickedItemId)) {
      // Item is already selected, so remove it
      setSelected((prevSelected) => prevSelected.filter(id => id !== clickedItemId));
    } else {
      // Item is not selected, so add it
      setSelected((prevSelected) => [...prevSelected, clickedItemId]);
    }

    // Call the callback function passed from the parent with the clicked item's ID
    props.onItemClick(clickedItemId);
  }

  return (
    <ul>
      {props.tracklist.map((item) => (
        <li 
            key={item.id}
            onClick={() => handleClick(item)}
            className={selected.includes(item.id) ? "selected" : ""}>
          <Track 
            artist={item.artist} 
            title={item.title} 
            album={item.album} />
        </li>
      ))}
    </ul>
  );
}

export default Tracklist;
