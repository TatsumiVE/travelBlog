import ServiceCard from "../Card/Services";
import styled from "./service.module.css";

export const cardData = [
  {
    icon: "fa-solid fa-hand-holding-dollar",
    title: "Get Best Prices",
    para: "Pay through our application and save thousands and get amazing rewards",
  },
  {
    icon: "fa-solid fa-virus-covid",
    title: "Covid Safe",
    para: "We have all the curated hotels that have all the precaution for a covid safe environment",
  },
  {
    icon: "fa-solid fa-credit-card",
    title: "Flexible Payments",
    para: "Enjoy the flexible payment through our app and get rewards on every payment.",
  },
  {
    icon: "fa-solid fa-street-view",
    title: "Find Near You",
    para: "Find the best hotels and places to visit near you in a single click.",
  },
];

const Service = () => {
  return (
    <section className={styled.service} id="service">
      <div className="inner">
        <div className="title">
          <h2>Our Service</h2>
        </div>
        <div className={styled.cardContainer}>
          {cardData.map((card, index) => {
            return (
              <ServiceCard
                icon={card.icon}
                title={card.title}
                para={card.para}
              ></ServiceCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Service;
