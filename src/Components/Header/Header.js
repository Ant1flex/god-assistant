import "./header.css"

function Header() {

  return (
    <div className="headerContainer">
      <img className="logo" src={'./Resource/GODlogo.png'} />
      <div className="navbar">
        <a className="navbarBtn" href="http://localhost:3000/">Damage</a>
        <a className="navbarBtn" href="http://localhost:3000/">Social</a>
      </div>

    </div>
  );
}

export default Header;
