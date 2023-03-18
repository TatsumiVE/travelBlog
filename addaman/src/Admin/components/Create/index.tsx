import React, { useState } from "react";
import styled from "./style.module.css";
import Desination from "../../../assets/Singapore.png";

type Props = {
  add: any;
};

const Create: React.FC<Props> = ({ add }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");

  const handleAdd = () => {
    add(title, desc, price, duration);
  };
  return (
    <>
      <div className={styled.createContent}>
        <h3 className={styled.iname}>Create</h3>
      </div>

      <div className={styled.create}>
        {/* <form> */}
        <div className={styled.imageGroup}>
          <label>Image</label>
          <input type="file" />
        </div>

        <div className={styled.titleGroup}>
          <label>Title</label>
          <input
            value={title}
            type="text"
            placeholder="Enter title of the new post"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className={styled.detailGroup}>
          <label>Description</label>
          <textarea
            value={desc}
            name="detail"
            id=""
            placeholder="Enter detail description of your post"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>

        <div className={styled.priceGroup}>
          <label>Price</label>
          <input
            value={price}
            type="text"
            placeholder="Enter price of the new post"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className={styled.titleGroup}>
          <label>Duration</label>
          <input
            value={duration}
            type="text"
            placeholder="Enter duration of the new post"
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        {/* <div className={styled.postBtn} onClick={handleAdd}>
            <a href="/footer">Post</a>
          </div> */}
        <button onClick={handleAdd}>Add</button>
        {/* </form> */}
      </div>
    </>
  );
};

export default Create;
