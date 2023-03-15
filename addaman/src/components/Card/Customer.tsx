import React from "react";

type Props = {
  image: string;
  name: string;
  feedback: string;
};
const CustomerCard: React.FC<Props> = ({ image, name, feedback }) => {
  return (
    <>
      <div className="cImg">
        <img src={image} alt={name} />
      </div>
      <p> {feedback}</p>

      <h3 className="cName">{name}</h3>
      <div className="cRating">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
    </>
  );
};
export default CustomerCard;
