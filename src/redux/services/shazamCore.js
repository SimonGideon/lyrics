import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core7.p.rapidapi.com",
    prepareHeaders: (headers) => {
        headers.set("X-RapidAPI-Key",import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);
        return headers;
      },
 }),
 

  endpoints(builder) {
    return {
      getTopCharts: builder.query({
        query: () =>
          "/charts/get-top-songs-in_world_by_genre?genre=POP&limit=10",
      }),
    };
  },
});

export const { useGetTopChartsQuery } = shazamCoreApi;
