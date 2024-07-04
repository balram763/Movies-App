import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

const App = () => {

  const [movie , setMovie] = useState(
    []
  )

  


  const fetchAPI = async() => {
    const responce = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`)
    const data = await responce.json()
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