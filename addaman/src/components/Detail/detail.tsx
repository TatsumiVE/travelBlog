import Button from "../Button";
import "../../App.css";
import Destination1 from "../../assets/Singapore.png";
import Destination2 from "../../assets/Thailand.png";
import Destination3 from "../../assets/Paris.png";
import Destination4 from "../../assets/Newzeland.png";
import Destination5 from "../../assets/Bora Bora.png";
import Destination6 from "../../assets/London.png";

import { data } from "../../App";

const Detail = () => {
  return (
    <section className="detail">
      <div className="detailWrapper">
        <div className="detailDesc">
          <div className="detailTitle">
            <div className="backBtn">
              <a href="./home">
                <i className="fa-solid fa-left-long"></i>
              </a>
            </div>
            <h2>Travel & Tourism</h2>
          </div>

          <div className="content">
            <h3>{data[0].title}</h3>

            <span>Trip Price - {data[0].cost}</span>

            <div className="body">
              <p>{data[0].desc}</p>
            </div>

            <Button className="detailBtn" label="Visit"></Button>
          </div>
        </div>

        <div className="detailImage">
          <img src={Destination1} alt="{data[0].title}" />
        </div>
      </div>
    </section>
  );
};

export default Detail;
