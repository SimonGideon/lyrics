import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, ArtistRelatedSongs } from '../components';

import { useGetArtistDetailsQuery, useGetTopArtistSongsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);
  const { data: topSongsData, isFetching: isFetchingTopSongs } = useGetTopArtistSongsQuery(artistId);
  if (isFetchingArtistDetails) return <Loader title="Loading artist details..." />;

  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={artistId}
        artistData={artistData?.data[0]}
      />
      <ArtistRelatedSongs
        data={topSongsData}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
