import React from "react";
import "./App.css";
import Button from "./components/Button";
import Customer1 from "./assets/customer.jpg";
import Destination1 from "./assets/Singapore.png";
import Destination2 from "./assets/Thailand.png";
import Destination3 from "./assets/Paris.png";
import Destination4 from "./assets/Newzeland.png";
import Destination5 from "./assets/Bora Bora.png";
import Destination6 from "./assets/London.png";
import { useState } from "react";
import ServiceCard from "./components/Card/Services";
import DestinationCard from "./components/Card/Destination";
import Customer2 from "./assets/customer2.jpg";
import Customer3 from "./assets/customer3.jpg";
import CustomerCard from "./components/Card/Customer";
import Carousel from "react-simply-carousel";

function App() {
  const cardData = [
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
  const data = [
    {
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      cost: "38,800",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: Destination6,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];
  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];
  const [active, setActive] = useState(1);

  const [activeSlide, setActiveSlide] = useState(0);

  const userData = [
    {
      image: Customer1,
      name: "Su Su",
      feedback: "Tempora, dolores nobis dicta iure exercitationem veritatis.",
    },
    {
      image: Customer2,
      name: "Myo Aung",
      feedback: " Tempora, dolores nobis dicta iure exercitationem veritatis.",
    },
    {
      image: Customer3,
      name: "Aye Aye",
      feedback: "Tempora, dolores nobis dicta iure exercitationem veritatis.",
    },
  ];

  const socialLink = [
    { icon: "fa-brands fa-facebook" },
    { icon: "fa-brands fa-instagram" },
    { icon: "fa-brands fa-linkedin" },
  ];
  return (
    <div className="App">
      <div className="pjWrap">
        <header>
          <div className="inner">
            <div className="layoutHeader">
              <div className="logo">
                <a href="./" target="_self">
                  Travel
                </a>
              </div>
              <nav>
                <ul className="navbar">
                  <li>
                    <a href="./" target="_self">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="./" target="_self">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="./" target="_self">
                      Places
                    </a>
                  </li>
                  <li>
                    <a href="./" target="_self">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="./" target="_self">
                      Login
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <section className="mainVisual">
          <div className="hero">
            <div className="bg">
              <h1>TRAVEL TO EXPLORE</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus id, qui blanditiis veniam voluptatem reiciendis
                maiores iusto earum porro aut, quaerat quae quod consequatur
                corporis. Sint perspiciatis accusamus qui sed.
              </p>

              <Button className="heroBtn" label="Explore Now"></Button>
            </div>
          </div>
        </section>

        <section className="service">
          <div className="inner">
            <div className="title">
              <h2>Our Service</h2>
            </div>
            <div className="cardContainer">
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

        <section id="recommend">
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

        <section>
          <div className="inner">
            <div className="customer">
              <div className="title">
                <h2>Our Customer</h2>
              </div>
              <div className="customerCard">
                {/* {userData.map((customer, index) => {
                  return (
                    <CustomerCard
                      image={customer.image}
                      name={customer.name}
                      feedback={customer.feedback}
                    ></CustomerCard>
                  );
                })} */}
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

        <footer>
          <div className="fContainer">
            <div className="social">
              {/* <span>
                <i className="fa-brands fa-facebook"></i>
              </span>
              <span>
                <i className="fa-brands fa-instagram"></i>
              </span>
              <span>
                <i className="fa-brands fa-linkedin"></i>
              </span> */}
              <ul>
                <li>
                  <a href="">aaaa</a>
                </li>
                <li>
                  <a href=""> bbbb</a>
                </li>
                <li>
                  <a href="">cccccc</a>
                </li>
              </ul>
              {/* {socialLink.map(()=>{return (<></>)})} */}
            </div>
            <div className="fList">
              <span>
                <a href="#" target="_self">
                  Home
                </a>
              </span>
              <span>
                <a href="#" target="_self">
                  About
                </a>
              </span>
              <span>
                <a href="#" target="_self">
                  Places
                </a>
              </span>
              <span>
                <a href="#" target="_self">
                  Testimonials
                </a>
              </span>
            </div>
            <address>
              Copyright &copy; 2021 Travelo. All rights reserved.
            </address>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
