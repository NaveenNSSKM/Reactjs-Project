import { Outlet,Link } from "react-router-dom";
import "./Layout.css";

const Layout=()=>{
    return(
   
         
    <>
        <nav className="navbar navbar-expand-lg bg-body">
<div className="container-fluid">
  <a className="navbar-brand"  href="#"><img src={`${process.env.PUBLIC_URL}/Images/logo.png`} className=" Logo rounded-circle" alt=""/></a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item active">
              <Link className="nav-link " to="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Shop">Shop</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
              </li> 
    </ul>
    <form className="d-flex" role="search">
        <input className="search px-3" type="search" id="searchInput" placeholder="Search" aria-label="Search"/>
        <button className="btn0" type="submit" onclick="searchContent()">Search</button>
        
      </form>
  </div>
</div>
</nav>





<Outlet/>
       </>
        
      
    )
}
export default Layout;