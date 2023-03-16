import Carousel from "react-simply-carousel";
import Customer1 from "../../assets/customer.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import CustomerCard from "../Card/Customer";
import { useState } from "react";

export const userData = [
  {
    image: Customer1,
    name: "Ms.Sophia",
    feedback: "Tempora, dolores nobis dicta iure exercitationem veritatis.",
  },
  {
    image: Customer2,
    name: "Mr.William",
    feedback: " Tempora, dolores nobis dicta iure exercitationem veritatis.",
  },
  {
    image: Customer3,
    name: "Ms.Isabella",
    feedback: "Tempora, dolores nobis dicta iure exercitationem veritatis.",
  },
];

const Customer = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <section>
      <div className="inner">
        <div className="customer">
          <div className="title">
            <h2>Our Customer</h2>
          </div>
          <div className="customerCard">
            <Carousel
              containerProps={{
                style: {
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",

                  userSelect: "none",
                },
              }}
              preventScrollOnSwipe
              swipeTreshold={60}
              activeSlideIndex={activeSlide}
              activeSlideProps={{
                style: {
                  background: "blue",
                },
              }}
              onRequestChange={setActiveSlide}
              forwardBtnProps={{
                children: ">",
                style: {
                  fontSize: "35px",
                  fontWeight: "bold",
                  width: 60,
                  height: 60,
                  minWidth: 60,
                  alignSelf: "center",
                  color: "#061ca9",
                  border: "none",
                  cursor: "pointer",
                  background: "none",
                },
              }}
              backwardBtnProps={{
                children: "<",
                style: {
                  fontSize: "35px",
                  fontWeight: "bold",
                  width: 60,
                  height: 60,
                  minWidth: 60,
                  alignSelf: "center",
                  color: "#061ca9",
                  border: "none",
                  cursor: "pointer",
                  background: "none",
                },
              }}
              dotsNav={{
                show: true,
                itemBtnProps: {
                  style: {
                    height: 16,
                    width: 16,
                    borderRadius: "50%",
                    border: 0,
                    margin: "20px 10px",
                  },
                },
                activeItemBtnProps: {
                  style: {
                    height: 16,
                    width: 16,
                    borderRadius: "50%",
                    border: 0,
                    background: "#061ca9",
                    margin: "20px 10px",
                  },
                },
              }}
              itemsToShow={1}
              speed={400}
            >
              {userData.map((customer, index) => {
                return (
                  <CustomerCard
                    image={customer.image}
                    name={customer.name}
                    feedback={customer.feedback}
                  ></CustomerCard>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
