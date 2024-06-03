import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { altLogo } from "../assets";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  // Construct artwork URL
  const artworkUrl = song.attributes.artwork.url.replace("{w}x{h}", "250x250");

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.name === song.attributes.name
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img
          alt="song_img"
          src={artworkUrl || altLogo}
          className="w-full h-full rounded-lg"
        />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song.id}`}>{song.attributes.name}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link
            to={
              song.relationships.artists.data.length
                ? `/artists/${song.relationships.artists.data[0]?.id}`
                : "/top-artists"
            }
          >
            {song.attributes.artistName}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
