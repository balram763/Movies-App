import React from 'react'

const Card = ({item}) => {

  const baseUrl = "https://image.tmdb.org/t/p/w1280"
  const poster = item.backdrop_path
  const urlPoster = baseUrl + poster;
  return (
    <>

      <div className='card shadow mt-4 p-5 '>
        <h3>{item.original_title}</h3>
        <p>{item.overview}</p>
        <img src={urlPoster} alt="" style={{height:"60vh", width:'100%', objectFit:'contain'}} />
        <div className="d-flex justify-content-between px-4 my-2">
        <p className='text-secondary'>{item.release_date}</p>
        <p className='text-secondary'>rating : {item.vote_average}</p>
        
        </div>
      </div>
    
    </>
  )
}

export default Card