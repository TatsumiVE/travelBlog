import Recommended from "../components/Recommed";
import Service from "../components/Service";
import MainVisual from "../components/Hero";
import Customer from "../components/Customer";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="App">
      <div className="pjWrap">
        <Navbar></Navbar>
        <MainVisual></MainVisual>
        <Service></Service>
        <Recommended></Recommended>
        <Customer></Customer>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
