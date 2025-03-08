import React from 'react'

const Card = ({item}) => {

  const baseUrl = "https://image.tmdb.org/t/p/w1280"
  const poster = item.backdrop_path
  const urlPoster = baseUrl + poster;
  return (
    <>

      
         
          <div className="col col-lg-4 col-md-6 col-sm-12">
          <div className='card shadow mt-4 p-5' style={{height:'90vh'}}>
           <h3>{item.original_title}</h3>
           <p>{item.overview}</p>
           <img src={urlPoster} alt="" style={{height:"40vh", width:'100%', objectFit:'contain'}} />
          <div className="d-flex justify-content-between px-4 my-2">
            <p className='text-dark'>{item.release_date}</p>
            <p className='text-danger'>rating : {item.vote_average}</p>
          </div>
         </div>
          </div>

          
         
    
    </>
  )
}

export default Card