
import { NavLink,useNavigate } from "react-router-dom"
const Navbar=()=>{
    const navigate=useNavigate()
    return(
        <div>

     <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">CarRent</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto ">
        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/cars">Cars</NavLink>
        <NavLink className="nav-link" to="/my-bookings">My Bookings</NavLink>
      </div>
    </div>
      <div className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        <button className='btn btn-success ms-2' onClick={()=>navigate('/owner')} >Dashboard</button>
        <button className='btn btn-primary ms-2' onClick={()=>navigate('/login')}>Login</button>
      </div>
  </div>
</nav>

        </div>
    )
}
export default Navbar