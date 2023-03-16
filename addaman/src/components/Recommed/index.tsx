import React from "react";
import Destination1 from "./assets/Singapore.png";
import Destination2 from "./assets/Thailand.png";
import Destination3 from "./assets/Paris.png";
import Destination4 from "./assets/Newzeland.png";
import Destination5 from "./assets/Bora Bora.png";
import Destination6 from "./assets/London.png";
import { useState } from "react";

import DestinationCard from "../Card/Destination";

import { data } from "../../App";

const packages = [
  "The Weekend Break",
  "The Package Holiday",
  "The Group Tour",
  "Long Term Slow Travel",
];

const Recommended = () => {
  const [active, setActive] = useState(1);

  return (
    <section id="places">
      <div className="inner">
        <div className="title">
          <h2>Recommended Destinations</h2>
        </div>
        <div className="packages">
          <ul>
            {packages.map((packages, index) => {
              return (
                <li
                  className={active === index + 1 ? "active" : ""}
                  onClick={() => setActive(index + 1)}
                >
                  {packages}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="destinations">
          {data.map((destination, index) => {
            return (
              <DestinationCard
                image={destination.image}
                title={destination.title}
              ></DestinationCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Recommended;
