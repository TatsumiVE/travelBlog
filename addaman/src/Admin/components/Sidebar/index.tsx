import React from "react";
import { Link } from "react-router-dom";
import styled from "./style.module.css";

const Stidebar = () => {
  return (
    <>
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
              <a href="/">
                Logout<i className="fa-solid fa-arrow-turn-up"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stidebar;
