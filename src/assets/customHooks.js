import { useEffect, useState } from 'react';
import { useGetSongDetailsQuery } from '../redux/services/shazamCore';

const useCachedSongDetails = (songid) => {
  const [Imgdata, setImgData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    if (Imgdata) {
      setIsFetching(false); // Data is available, no need to fetch
      return;
    }

    const fetchSongDetails = async () => {
      try {
        const { data } = await useGetSongDetailsQuery({ songid });
        setImgData(data);
        setIsFetching(false);
      } catch (err) {
        // Handle the error
      }
    };

    fetchSongDetails();
  }, [songid, Imgdata]);

  return { Imgdata, isFetching };
};

export default useCachedSongDetails;
