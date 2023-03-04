import ChunksUpload from "./ChunksUpload";
import TracksList from "./TracksList";

const Player = () => {
  return (
    <div className="player_container">
      <div className="player_current_track">
        Current track
        <ChunksUpload />
      </div>
      <div className="player_tracks_list">
        <TracksList />
      </div>
    </div>
  );
}

export default Player;
