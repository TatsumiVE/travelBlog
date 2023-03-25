import React from "react";
import { Link } from "react-router-dom";
import styled from "./style.module.css";

const Navbar = () => {
  return (
    <div className={styled.dashboardContainer}>
      <section className={styled.menu}>
        <div className={styled.menuText}>
          <div className={styled.logo}>
            <a href="/">Travel</a>
          </div>

          <div className={styled.items}>
            <li>
              <i className="fa-solid fa-chart-line"></i>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <i className="fa-solid fa-circle-plus"></i>
              <Link to="/create">Create</Link>
            </li>
            <li>
              <i className="fa-solid fa-comment"></i>
              <Link to="/feedback">Feedback</Link>
            </li>
          </div>
        </div>

        <div className={styled.menuBtn}>
          <div className={styled.logout}>
            <div className={styled.logoutBtn}>
              <Link to="/">
                Logout<i className="fa-solid fa-arrow-turn-up"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <section className={styled.navBar}>
        <div className={styled.nav}>
          <div className={styled.n1}>
            <div className={styled.search}>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" name="search" placeholder="Search" id="" />
            </div>
          </div>

          <div className={styled.profile}>
            <i className="fa-solid fa-bell"></i>
            <img src={Destination} alt="user" />
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Navbar;
