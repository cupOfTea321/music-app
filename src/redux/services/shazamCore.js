import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '5c44f65fffmsh2a67b7adb6cd193p18ac8djsnb47814608abf')
      return headers;
    },
  }),
  // добавляем необходимый поинт
  endpoints: (builder) => ({
    getTopCharts: builder.query({query: () => '/v1/charts/world'}),
    getSongDetails: builder.query({query: ( songid ) => `/v1/tracks/details?track_id=${songid}`}),
    getArtistDetails: builder.query({ query: (artistId) => `/v2/artists/details?artist_id=${artistId}` }),
  })
})

// экспортируем заданные поинты как хуки
export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetArtistsDetailQuery,
} = shazamCoreApi
