import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core7.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_API_KEY);
      headers.set("X-RapidAPI-Host", "shazam-core7.p.rapidapi.com");
      return headers;
    },
  }),

  endpoints(builder) {
    return {
      getTopCharts: builder.query({
        query: () =>
          "/charts/get-top-songs-in_world_by_genre?genre=POP&limit=1",
      }),

      getTopChartsByGenre: builder.query({
        query: (genreListId) =>
          `/charts/get-top-songs-in_world_by_genre?genre=${genreListId}&limit=1`,
      }),

      getSongDetails: builder.query({
        query: ({ songid }) => `/songs/get_details?id=${songid}`,
      }),

      getSongRelated: builder.query({
        query: ({ songid }) => `/songs/list-recommendations?id=${songid}`,
      }),
      getArtistDetails: builder.query({
        query: (artistId) => `/artist/get-details?id=${artistId}`,
      }),

      getTopArtistSongs: builder.query({
        query: (artistId) => `/artist/get-top-songs?id=${artistId}`,
      }),

      getSongByCountry: builder.query({
        query: (countryCode) =>
          `/charts/get-top-songs-in-country?country_code=${countryCode}&limit=10`,
      }),

      getSongsBySearch: builder.query({
        query: (searchTerm) => `/search?term=${searchTerm}&limit=10`,
      }),
    };
  },
});

export const {
  useGetTopChartsQuery,
  useGetSongsBySearchQuery,
  useGetTopChartsByGenreQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetTopArtistSongsQuery,
  useGetSongByCountryQuery,
} = shazamCoreApi;
