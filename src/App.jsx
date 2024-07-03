import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

const App = () => {

  const [movie , setMovie] = useState(
    [{
        id : 1,
        title : "race 2",
        overview : "race is good movie"
      },
      {
        id : 2,
        title : "bahubali",
        overview : "bahubali is good movie"
      }
    ]
  )


  const fetchAPI = async() => {
    const responce = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`)
    const data = await responce.json()
    // console.log(data.results)
    setMovie(data.results)
    console.log(movie)

  }


  useEffect(()=>{
    fetchAPI()
  },[])


  return (
    <>
    <Navbar/>
    <Home movie={movie}/>

    
    </>
  )
}

export default App