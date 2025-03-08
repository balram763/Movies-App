import React, { useState } from 'react'

const Navbar = ({fetchAPI}) => {


  const [text,setText] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    fetchAPI(text)

  }
  
  return (
    <>
    <nav className="navbar bg-dark">
  <div className="container d-flex justify-content-between">
    <h3 className="navbar-brand mb-0 h1 text-light">JUST WATCH</h3>

    <div>
    <form onSubmit={(e)=>handleSubmit(e)} class="d-flex" role="search">
      <input onChange={(e)=>setText(e.target.value)} value={text} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-light" type="submit">Search</button>
    </form>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Navbar