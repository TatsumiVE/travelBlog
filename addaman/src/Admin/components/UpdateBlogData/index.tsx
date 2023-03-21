import React, { useState } from "react";
import styled from "./Style.module.css";
import { Link } from "react-router-dom";

type Props = {
  sendItem: any;
  handledUpdate: any;
};

const UpdateData: React.FC<Props> = ({ sendItem, handledUpdate }) => {
  const index = sendItem.index;
  const [image, setImage] = useState(sendItem.image);
  const [title, setTitle] = useState(sendItem.title);
  const [desc, setDesc] = useState(sendItem.desc);
  const [cost, setCost] = useState(sendItem.cost);
  const [duration, setDuration] = useState(sendItem.duration);

  // const [item, setItem] = useState(sendItem);

  const handledClick = (e: any) => {
    e.preventDefault();
    console.log(index, image, title, desc, cost, duration);
    handledUpdate({ index, image, title, desc, cost, duration });
    setImage("");
    setTitle("");
    setDesc("");
    setCost("");
    setDuration("");
  };

  return (
    <>
      <div className={styled.createContent}>
        <h3 className={styled.iname}>Update Blog Data</h3>
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
              name="detail"
              id=""
              value={desc}
              rows={10}
              cols={5}
              placeholder="Enter detail description of your post"
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>

          <div className={styled.priceGroup}>
            <label>Price</label>
            <input
              value={cost}
              type="text"
              placeholder="Enter price of the new post"
              onChange={(e) => setCost(e.target.value)}
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

          <div className={styled.postBtn} onClick={handledClick}>
            <Link to="/dashboard">Update</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateData;
