import { Link } from 'react-router-dom';


const DetailsHeader = ({ artistId, artistData, songData}) =>{
  return (
    <div classNmae="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-1 from-transparent to-black sm:h-48 h-28">

      </div>
      <div className="absolute inset-0 flex items-center">
        <img 
        alt="art"
        src={artistId? artistData?.artist[artistId].attributes?.artwork?.url.replace(`{w}`, '500').replace(`{h}`, '500')
        :songData?.images?.coverart}
        className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"/>

      </div>
    </div>
  )};

export default DetailsHeader;
