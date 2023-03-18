import React from "react";
import styled from "./style.module.css";
import Destination from "../../../assets/Singapore.png";
const Feedback = () => {
  return (
    <>
      <h3 className={styled.iname}>Customer Feedback</h3>

      <div className={styled.board}>
        <table>
          <thead>
            <tr>
              <td>Image</td>
              <td>Customer Name</td>
              <td>Email</td>
              <td>Message</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={Destination} alt="customer" />
              </td>
              <td>John</td>
              <td>John@gmail.com</td>
              <td>I love this travel blog</td>
              <td className={styled.delete}>
                <i className="fa-regular fa-trash-can" id="delete"></i>
              </td>
            </tr>

            <tr>
              <td>
                <img src={Destination} alt="customer" />
              </td>
              <td>John</td>
              <td>John@gmail.com</td>
              <td>I love this travel blog</td>
              <td className={styled.delete}>
                <i className="fa-regular fa-trash-can" id="delete"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Feedback;
