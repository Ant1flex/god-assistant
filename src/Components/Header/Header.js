import { Link } from 'react-router-dom'

import "./header.css"

function Header() {

  return (
    <div className="headerContainer">
      <img className="logo" src={'./Resource/GODlogo.png'} />
      <div className="navbar">
        <Link className="navbarBtn" to="/">Home</Link>
        <Link className="navbarBtn" to="/damage">Damage</Link>
        <Link className="navbarBtn" to="/social">Social</Link>
      </div>
    </div>
  );
}

export default Header;
