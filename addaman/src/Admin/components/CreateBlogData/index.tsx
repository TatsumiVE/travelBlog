import React, { useState } from "react";
import styled from "./style.module.css";
import { Link } from "react-router-dom";

type Props = {
  add: any;
};

const Create: React.FC<Props> = ({ add }) => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");

  const handleAdd = (e: any) => {
    e.preventDefault();
    console.log(image);
    add(image, title, desc, price, duration);
    setImage("");
    setTitle("");
    setDesc("");
    setPrice("");
    setDuration("");
  };
  return (
    <>
      <div className={styled.createContent}>
        <h3 className={styled.iname}>Create</h3>
      </div>

      <div className={styled.create}>
        <form action="" method="get" encType="multipart/form-data">
          <div className={styled.imageGroup}>
            <label>Image</label>
            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={(e) => {
                if (!e.target.files) return;
                const file = e.target.files[0];
                const src = URL.createObjectURL(file);
                setImage(src);
                console.log(file, src);
              }}
            />
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

          <div className={styled.postBtn}>
            <Link to="/dashboard" onClick={handleAdd}>
              Post
            </Link>
          </div>
          {/* <button onClick={handleAdd}>Add</button> */}
        </form>
      </div>
    </>
  );
};

export default Create;
