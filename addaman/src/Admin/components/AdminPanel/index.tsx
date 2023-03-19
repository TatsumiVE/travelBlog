import CreateData from "../CreateBlogData";
import Dashboard from "../Dashbord";
import Feedback from "../Feedback";
import UpdateData from "../UpdateBlogData";
import styled from "./style.module.css";
import React, { useState } from "react";
import { Route } from "react-router-dom";

import Destination from "../../../assets/Singapore.png";
import SideBar from "../Sidebar";

import Destination1 from "../../../assets/Singapore.png";
import Destination2 from "../../../assets/Thailand.png";
import Destination3 from "../../../assets/Paris.png";
import Destination4 from "../../../assets/Newzeland.png";
import Destination5 from "../../../assets/Bora Bora.png";
import Destination6 from "../../../assets/London.png";
import { CrudContext } from "../../../DestinationData";
import { Routes } from "react-router-dom";
import { useContext } from "react";
const AdminPanel = () => {
  const { data } = useContext<any>(CrudContext);
  console.log("context", { data });

  // const [data, setData] = useState<any>([
  //   {
  //     image: Destination1,
  //     title: "Singapore",
  //     desc: "Republic of Singapore, is a sovereign island country and city-state in maritime Southeast Asia. It lies about one degree of latitude (137 kilometres or 85 miles) north of the equator, off the southern tip of the Malay Peninsula, bordering the Strait of Malacca to the west, the Singapore Strait to the south, the South China Sea to the east, and the Straits of Johor to the north. The country's territory is composed of one main island, 63 satellite islands and islets, and one outlying islet; the combined area of these has increased by 25% since the country's independence as a result of extensive land reclamation projects. It has the third highest population density in the world. ",
  //     cost: "38,800",
  //     duration: "Approx 2 night trip",
  //   },
  //   {
  //     image: Destination2,
  //     title: "Thailand",

  //     desc: "Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha. In Bangkok, the capital, an ultramodern cityscape rises next to quiet canalside communities and the iconic temples of Wat Arun, Wat Pho and the Emerald Buddha Temple (Wat Phra Kaew). Nearby beach resorts include bustling Pattaya and fashionable Hua Hin. ",
  //     cost: "54,200",
  //     duration: "Approx 2 night trip",
  //   },
  //   {
  //     image: Destination3,
  //     title: "Paris",
  //     desc: "The City of Paris is the centre of the Île-de-France region, or Paris Region, with an estimated population of 12,262,544 in 2019, or about 19% of the population of France,[8] making the region France's primate city. The Paris Region had a GDP of €739 billion ($743 billion) in 2019, the highest in Europe.[9] According to the Economist Intelligence Unit Worldwide Cost of Living Survey, in 2022, Paris was the city with the ninth-highest cost of living in the world.[10]",
  //     cost: "45,500",
  //     duration: "Approx 2 night trip",
  //   },
  //   {
  //     image: Destination4,
  //     title: "New Zealand",
  //     desc: "The islands of New Zealand were the last large habitable land to be settled by humans. Between about 1280 and 1350, Polynesians began to settle in the islands and then developed a distinctive Māori culture. In 1642, the Dutch explorer Abel Tasman became the first European to sight and record New Zealand. In 1840, representatives of the United Kingdom and Māori chiefs signed the Treaty of Waitangi, which in its English version declared British sovereignty over the islands. In 1841, New Zealand became a colony within the British Empire. Subsequently, a series of conflicts between the colonial government and Māori tribes resulted in the alienation and confiscation of large amounts of Māori land. New Zealand became a dominion in 1907; it gained full statutory independence in 1947, retaining the monarch as head of state.",
  //     cost: "24,100",
  //     duration: "Approx 1 night trip",
  //   },
  //   {
  //     image: Destination5,
  //     title: "Bora Bora",
  //     desc: "Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia. Surrounded by sand-fringed motus (islets) and a turquoise lagoon protected by a coral reef, it’s known for its scuba diving. It's also a popular luxury resort destination where some guest bungalows are perched over the water on stilts. At the island's center rises Mt. Otemanu, a 727m dormant volcano.",
  //     cost: "95,400",
  //     duration: "Approx 2 night 2 day trip",
  //   },
  //   {
  //     image: Destination6,
  //     title: "London",
  //     desc: "London is one of my attractions because of the close distance between us, I like a lot to go to it to spend a day trip with my friends, and do some recreational activities, such as cycling and passing through many of its attractions, such as Buckingham Palace, the Science Museum, or the interactive science and technology center in London, and take some souvenir photos in these wonderful areas.The north of the city: which includes the city district. Camden. Ealing. Enfield District. Barking and Dagenham. Barnett area. Brent area. Havering. London. Hackney. Hammersmith and Fulham. Harnegi. Harrow. And then Forrest. Westminster. Hounslow. Kansas and Chelsea. Newham. Redbrieg. Tower Hamlets.",
  //     cost: "38,800",
  //     duration: "Approx 3 night 2 day trip",
  //   },
  // ]);

  // const Add = (image: any, title: any, desc: any, cost: any, duration: any) => {
  //   setData([
  //     ...data,
  //     {
  //       image: image,
  //       title: title,
  //       desc: desc,
  //       cost: cost,
  //       duration: duration,
  //     },
  //   ]);
  // };

  // const Update = (newData: any) => {
  //   const UpdateTask = data.map((data: any, index: number) => {
  //     if (newData.index === index) {
  //       return newData;
  //     } else {
  //       return data;
  //     }
  //   });
  //   setData(UpdateTask);
  //   console.log(UpdateTask);
  // };

  // const [oldData, setoldData] = useState({});
  // const sendData = (item: any) => {
  //   setoldData(item);
  //   console.log("admin", item, oldData);
  // };

  // const Delete = (name: string) => {
  //   const deleteTask = data.filter((data: any) => {
  //     // console.log(name, data.title);
  //     return name !== data.title;
  //   });
  //   setData(deleteTask);
  // };

  return (
    <>
      <div className={styled.dashboardContainer}>
        <SideBar />
        <section className={styled.navBar}>
          <div className={styled.nav}>
            <div className={styled.n1}>
              <div className={styled.search}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" name="search" placeholder="Search" id="" />
              </div>
            </div>

            <div className={styled.profile}>
              <i className="fa-solid fa-bell"></i>
              <img src={Destination} alt="user" />
            </div>
          </div>

          <Routes>
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  data={data}
                  sendData={sendData}
                  handledDelete={Delete}
                />
              }
            ></Route>

            <Route path="/create" element={<CreateData add={Add} />}></Route>

            <Route
              path="/update"
              element={
                <UpdateData
                  sendItem={oldData}
                  handledUpdate={Update}
                ></UpdateData>
              }
            ></Route>

            <Route path="/feedback" element={<Feedback />}></Route>
          </Routes>
        </section>
      </div>
    </>
  );
};

export default AdminPanel;
