import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
  
  return (
    <>
   <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
  <div className="container-fluid">
    {/* <Link  className="navbar-brand " to="/">{props.title}</Link> */}
    <a  className="navbar-brand " href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          {/* <Link  className="nav-link" to="/Form">Form</Link> */}
          <a className="nav-link active" aria-current="page" href="#">Form</a>

        </li>
        <li className="nav-item dropdown">
          <a  className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">About</a></li>
            <li><a className="dropdown-item" href="#">Contact</a></li>
          </ul>
          
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <select id="theme" class="form-select w-25" aria-label="Default select example" onChange={props.Themeselector}>
  <option selected>Open this select menu</option>
  <option value="Normal">Normal</option>
  <option value="darkGreen">Dark Green</option>
  <option value="darkOrange">Dark Orange</option>
</select>
      <div className="form-check form-switch">
  <input onClick={props.toggleBtn} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label style={{color:props.Mode==='light'?'black':'white' }}  className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.Mode==='light'?'dark':'light'} Mode</label>
</div>
    </div>
  </div>
</nav>
    </>
  )
}
Navbar.propTypes = {title: PropTypes.string}
Navbar.defaultProps = {title: "set title here"}

