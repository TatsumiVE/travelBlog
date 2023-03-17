import React from "react";
import styled from "./main.module.css";

type Props = {
  icon: string;
  title: string;
  para: string;
};
const ServiceCard: React.FC<Props> = ({ icon, title, para }) => {
  return (
    <div className={styled.card}>
      <div className={styled.serviceIcon}>
        <i className={icon}></i>
      </div>
      <div className={styled.serviceTxt}>
        <h3>{title}</h3>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
