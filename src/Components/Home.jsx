import React from 'react'
import Card from './Card'

const Home = ({movie}) => {
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