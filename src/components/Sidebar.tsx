import "../assets/css/style.css";
import logoIcon from "../assets/images/logo-icon.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    localStorage.removeItem("jwt");
    window.location.reload();
  };

  return (
    <>
      <div className="wrapper">
        <div className="sidebar-wrapper" data-simplebar="true">
          <div className="sidebar-header">
            <div className="">
              <img src={logoIcon} className="logo-icon-2" alt="" />
            </div>
            <div>
              <h4 className="logo-text">Mr. AirBnB</h4>
            </div>
          </div>
          <ul className="metismenu" id="menu">
            <li>
              <Link to="/home">
                <div className="parent-icon icon-color-2">
                  <i className="bx bx-home-alt"></i>
                </div>
                <div className="menu-title">Home</div>
              </Link>
            </li>
            <li>
              <a href="/profile">
                <div className="parent-icon icon-color-2">
                  <i className="bx bx-user-circle"></i>
                </div>
                <div className="menu-title">Account</div>
              </a>
            </li>
            <li>
              <a href="/" onClick={handleLogout}>
                <div className="parent-icon icon-color-2">
                  <i className="bx bx-log-out"></i>
                </div>
                <div className="menu-title">Logout</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
