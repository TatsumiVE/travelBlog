import React from "react";

import styled from "./recommend.module.css";

import DestinationCard from "../Card/Destination";

import { data } from "../../DestinationData";

const packages = [
  "The Weekend Break",
  "The Package Holiday",
  "The Group Tour",
  "Long Term Slow Travel",
];

const Recommended = () => {
  return (
    <section id="places">
      <div className="inner">
        <div className="title">
          <h2>Recommended Destinations</h2>
        </div>
        <div className={styled.packages}>
          <ul>
            {packages.map((packages, index) => {
              return <li>{packages}</li>;
            })}
          </ul>
        </div>
        <div className={styled.destinations}>
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
