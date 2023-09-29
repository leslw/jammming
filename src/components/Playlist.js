import React, { useEffect, useState } from "react";
import Tracklist from "./Tracklist";

function Playlist(props) {
  const [name, setName] = useState("Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  // This function tracks the state of the playlist name
  function handleChange(e) {
    setName(e.target.value);
  }

  // This function adds songs to the playlist using the song's key
  useEffect(() => {
    const filteredTracks = props.tracks.filter(track => {
      // Assuming props.added is an array of values you want to match against
      return props.added.includes(track.id);
    });
    setPlaylistTracks(filteredTracks);
  }, [props.tracks, props.added]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleChange}
      />
      <Tracklist tracklist={playlistTracks} onItemClick={props.onAddTrack} />
    </div>
  );
}

export default Playlist;
