import {useEffect, useState} from "react";
import ApiService from "../services/ApiService";

import UploadFile from "./UploadFile";

const TracksList = () => {
  const [loading, setLoading] = useState(false);
  const [tracks, setTracks] = useState([])
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchAudioTracks();
  }, [])

  const fetchAudioTracks = () => {
    ApiService.get('tracks').then(response => {
      if (response.data) {
        setTracks(response.data.data);
        setCount(response.data.count);
      }
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <>
      <div className="track_list">
        <h4 className="text-lg text-orange-500">Playlist</h4>
        <div>
          {tracks.map((track, index) => (
            <div key={index}>
              {track.track}
              <span><a href="#">del</a></span>
            </div>
          ))}
        </div>
        <UploadFile />
      </div>
    </>
  )
}

export default TracksList;
