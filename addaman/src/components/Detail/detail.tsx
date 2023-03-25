import Button from "../Button";
import "../../App.css";
import styled from "./detail.module.css";
import Destination1 from "../../assets/Singapore.png";
import { CrudContext } from "../../DestinationData/context";
import { useContext } from "react";

const Detail = () => {
  const { data } = useContext(CrudContext);
  return (
    <section className="detail">
      <div className={styled.detailWrapper}>
        <div className={styled.detailDesc}>
          <div className={styled.detailTitle}>
            <div className={styled.backBtn}>
              <a href="/">
                <i className="fa-solid fa-left-long"></i>
              </a>
            </div>
            <h2>Travel & Tourism</h2>
          </div>

          <div className={styled.content}>
            <h3>{data[0].title}</h3>
            <span>Trip Price - {data[0].cost}</span>
            <div className={styled.body}>
              <p>{data[0].desc}</p>
            </div>
            <Button className="detailBtn" label="Visit"></Button>
          </div>
        </div>

        <div className={styled.detailImage}>
          <img src={Destination1} alt="{data[0].title}" />
        </div>
      </div>
    </section>
  );
};

export default Detail;
