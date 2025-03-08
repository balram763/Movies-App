import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Slider from './Components/Slider'

const App = () => {

  const [movie , setMovie] = useState(
    []
  )


  


  const allFetch = async() => {
    const responce = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`)
    const data = await responce.json()
    setMovie(data.results)

  }

  const fetchAPI = async(movieName) => {
    const responce = await fetch(`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${movieName}`)
    const data = await responce.json()
    setMovie(data.results)
  }


  useEffect(()=>{
    allFetch()
  },[])


  return (
    <>
    <div className="bg-dark">
    <Navbar fetchAPI={fetchAPI}/>
    <Slider movie={movie}/>
    <Home movie={movie}/>
    </div>

    
    </>
  )
}

export default App