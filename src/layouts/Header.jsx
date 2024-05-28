import { Modal } from "antd";
import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";

function Header({}) {
  const navigate = useNavigate();
  const [logOutModal, setLogOutModal] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("User");
    localStorage.removeItem("loggedIn");

    navigate("/");
  };
  return (
    <>


      <div className="navbar-custom">
        <ul className="list-unstyled topnav-menu float-end mb-0">
          <li className="d-none d-lg-block">
            <form className="app-search">
              <div className="app-search-box"></div>
            </form>
          </li>

          <li className="dropdown notification-list topbar-dropdown">
            <a
              className="nav-link dropdown-toggle waves-effect waves-light"
              data-bs-toggle="dropdown"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
              onClick={() => setLogOutModal(true)}
            >
              <i className="fas fa-sign-out-alt noti-icon" style={{color:"red"}} />
            </a>
          </li>
        </ul>
        {/* LOGO */}
        <div className="logo-box">
          <a href={undefined} className="logo logo-dark text-center">
            <span className="logo-lg">
              <img src="/assets/images/kalyan logo-01.png" alt height={120} />
            </span>
          </a>
        </div>
        <ul className="list-unstyled topnav-menu topnav-menu-left mb-0">
          <li>
            <button className="button-menu-mobile disable-btn waves-effect">
              <i className="fe-menu" />
            </button>
          </li>
          <li></li>
        </ul>
        <div className="clearfix" />
      </div>

      <Modal
        title="Confirm Logout"
        visible={logOutModal}
        onOk={handleLogout}
        onCancel={() => setLogOutModal(false)}
        okText="Yes, log out"
        cancelText="No, keep it"
      >
        <p>Are you sure you want to log out?</p>
      </Modal>
    </>
  );
}

export default Header;
