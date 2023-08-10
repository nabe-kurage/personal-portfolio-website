import './Navigation.css';
function Navigation() {
  return (
    <nav className="navigation">
      <h1 className="logo">
        <a href="/">nabekura's portfolio site</a>
      </h1>

      <div className="hamburger">
        <div className="hamburgerBorder"></div>
        <div className="hamburgerBorder"></div>
      </div>
    </nav>
  );
}

export default Navigation;
