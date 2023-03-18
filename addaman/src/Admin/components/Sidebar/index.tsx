import React from "react";
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
              <a href="/">Dashboard</a>
            </li>
            <li>
              <i className="fa-solid fa-circle-plus"></i>
              <a href="/">Create</a>
            </li>
            <li>
              <i className="fa-solid fa-comment"></i>
              <a href="/">Feedback</a>
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
