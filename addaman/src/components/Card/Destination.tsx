import React from "react";
import Button from "../Button";
import styled from "./main.module.css";

type Props = {
  image: string;
  title: string;
};
const DestinationCard: React.FC<Props> = ({ image, title }) => {
  return (
    <div className={styled.destinationCard}>
      <div className={styled.destinationImage}>
        <img src={image} alt={title} />
      </div>
      <div className={styled.destinationTitle}>
        <h3>{title}</h3>

        <Button className={styled.detailBtn} label="Detail"></Button>
      </div>
    </div>
  );
};
export default DestinationCard;
