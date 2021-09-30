import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Allan's  Blog</h1>
      <div className="links">
        <Link to="/" style={{
          color:"#fff",
          backgroundColor:"#f1356d",
          borderRadius:"8px"
        }}>Home</Link>
        <Link to="/create" style={{
          color:"#fff",
          backgroundColor:"#f1356d",
          borderRadius:"8px"
        }}>New Blog</Link>
      </div>

    </nav>

  );

}

export default Navbar;
