import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "./Style.module.css";
// import Destination from "../../../assets/Singapore.png";

type Props = {
  data: datas[];
  handledUpdate: any;
  handledDelete: any;
};

type datas = {
  image: string;
  title: string;
  desc: string;
  cost: string;
  duration: string;
};

const Dashboard: React.FC<Props> = ({ data, handledUpdate, handledDelete }) => {
  return (
    <>
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
                    <td
                      className={styled.edit}
                      onClick={() => {
                        handledUpdate(item);
                      }}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </td>
                    <td
                      className={styled.delete}
                      onClick={() => {
                        handledDelete(item.title);
                      }}
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
    </>
  );
};
export default Dashboard;
