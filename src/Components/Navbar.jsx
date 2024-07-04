import React from 'react'

const Navbar = () => {

  
  return (
    <>
    <nav className="navbar bg-primary">
  <div className="container d-flex justify-content-between">
    <h3 className="navbar-brand mb-0 h1 text-light">Movie</h3>

    <div>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-light" type="submit">Search</button>
    </form>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Navbar