import React from 'react'
import defaultImage from '../assets/defaultImage.png'

const SliderImage = ({ item, i }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w1280";
  const poster = item?.backdrop_path;
  const urlPoster = poster ? baseUrl + poster : defaultImage;


  return (
    <div className={i === 0 ? "carousel-item active" : "carousel-item"}>
      <img 
        src={urlPoster} 
        className="d-block w-100" 
        style={{ height: '70vh', objectFit: 'cover' }} 
        alt={item?.original_title || "Movie Image"} 
      />
      <div className="carousel-caption d-none d-md-block">
        <h5 className='text-white'>{item?.original_title || "Untitled"}</h5>
        <p>{item?.overview || "No description available."}</p>
      </div>
    </div>
  );
};

export default SliderImage;
