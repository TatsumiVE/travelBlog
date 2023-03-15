import React from "react";
import Button from "../Button";

type Props = {
  image: string;
  title: string;
};
const DestinationCard: React.FC<Props> = ({ image, title }) => {
  return (
    <div className="destinationCard">
      <div className="destinationImage">
        <img src={image} alt={title} />
      </div>
      <div className="destinationTitle">
        <h3>{title}</h3>

        <Button className="detailBtn" label="Detail"></Button>
      </div>
    </div>
  );
};
export default DestinationCard;
