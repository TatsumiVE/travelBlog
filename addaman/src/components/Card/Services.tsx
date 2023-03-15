import React from "react";

type Props = {
  icon: string;
  title: string;
  para: string;
};
const ServiceCard: React.FC<Props> = ({ icon, title, para }) => {
  return (
    <div className="card">
      <div className="serviceIcon">
        <i className={icon}></i>
      </div>
      <div className="serviceTxt">
        <h3>{title}</h3>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
