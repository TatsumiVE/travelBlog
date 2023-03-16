import React from "react";

type Props = {
  image: string;
  name: string;
  feedback: string;
};
const CustomerCard: React.FC<Props> = ({ image, name, feedback }) => {
  return (
    <div className="customerWrap">
      <div className="cImg">
        <img src={image} alt={name} />
      </div>
      <h3 className="cName">{name}</h3>
      <p> {feedback}</p>

      <div className="cRating">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
    </div>
  );
};
export default CustomerCard;
