import { NavLink } from 'react-router-dom';
import logo from '../../assets/Icons/Layer_1-2.png';
import './Navbar.css';
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src={logo} alt='logo'/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link"  to="/">
            الصفحة الرئيسية
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/s">
            نبذة عنا
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/sss">
            ميزات
          </NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <button style={{backgroundColor:'#FF9F24'}} className="btn rounded-1 px-5 py-2" type="submit">تحميل</button>
      </form>
    </div>
  </div>
</nav>

  )
}
