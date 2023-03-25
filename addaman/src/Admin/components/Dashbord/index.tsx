import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "./style.module.css";
import { CrudContext } from "../../../DestinationData/context";
import Navbar from "../Navbar";
import Styles from "../main.module.css";

const Dashboard = () => {
  const { data, sendData, deleteData } = useContext(CrudContext);
  return (
    <div className={Styles.dashboardContainer}>
      <Navbar />
      <div className={styled.boardContent}>
        <h3 className={styled.iname}>Dashboard</h3>

        <div className={styled.board}>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item: any, index: number) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={item.image} alt="customer" />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.desc}</td>
                    <td>{item.cost}</td>
                    <td className={styled.edit}>
                      <Link
                        to="/update"
                        onClick={() => {
                          console.log(item);
                          sendData(item);
                        }}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Link>
                    </td>
                    <td
                      className={styled.delete}
                      onClick={() => deleteData(item.id)}
                    >
                      <i className="fa-regular fa-trash-can" id="delete"></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
