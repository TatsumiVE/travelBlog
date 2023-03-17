import React from "react";
import SocialLink from "./SocialLink";
import FList from "./FooterList";
import styled from "./main.module.css";

const socialLink = [
  { icon: "fa-brands fa-facebook" },
  { icon: "fa-brands fa-instagram" },
  { icon: "fa-brands fa-linkedin" },
];
const fList = [
  { list: "Home" },
  { list: "About" },
  { list: "Places" },
  { list: "Testimonials" },
];

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styled.fContainer}>
          <div className={styled.socialLink}>
            <ul>
              {socialLink.map((social) => {
                return <SocialLink icon={social.icon} />;
              })}
            </ul>
          </div>
          <div className={styled.fList}>
            <ul>
              {fList.map((fList) => {
                return <FList listName={fList.list} />;
              })}
            </ul>
          </div>
          <address>Copyright &copy; 2021 Travelo. All rights reserved.</address>
        </div>
      </footer>
    </>
  );
};

export default Footer;
