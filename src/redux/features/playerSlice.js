import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: "",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song.attributes;

      if (action.payload?.data?.data) {
        state.currentSongs = action.payload.data.data.map(
          (item) => item.attributes
        );
      } else {
        state.currentSongs = [];
      }

      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    nextSong: (state, action) => {
      const song = state.currentSongs[action.payload];
      state.activeSong = song;
      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      const song = state.currentSongs[action.payload];
      state.activeSong = song;
      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
});

export const {
  setActiveSong,
  nextSong,
  prevSong,
  playPause,
  selectGenreListId,
} = playerSlice.actions;

export default playerSlice.reducer;
