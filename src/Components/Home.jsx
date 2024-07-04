import React from 'react'
import Card from './Card'

const Home = ({movie}) => {



  if(movie.length === 0){
    return(
      <>
      
      <div className="text-center d-flex align-item-center justify-content-center container p-5"> 
     <button className="btn btn-primary " type="button" disabled>
      <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span role="status"> Loading.....</span>
     </button>
     </div></>
    )
  }


  return (
    <>
        <div className="container p-3 text-center my-2">
    <h1>Movie</h1>
      {
        movie.map(item => <Card key={movie.id} item={item}/>)
      }
    </div>
    </>
  )
}

export default Home