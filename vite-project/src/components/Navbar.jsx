import React from 'react'

const Navbar = () => {
  return (
    <div>

      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#">
            Bag<span>ify</span>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">About us</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Menu
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Small Bags</a></li>
                  <li><a className="dropdown-item" href="#">Hand Bags</a></li>
                  <li><a className="dropdown-item" href="#">Side Bags</a></li>
                  <li><a className="dropdown-item" href="#">Office Bags</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active">Services</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active">Contact us</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar