import React, { useContext, useState } from "react";
import styled from "./style.module.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Styles from "../main.module.css";
import { CrudContext } from "../../../DestinationData/context";

const Create = () => {
  const { addData } = useContext(CrudContext);
  const [id, setId] = useState(7);
  const defaultData = {
    id: "",
    image: "",
    title: "",
    desc: "",
    cost: "",
    duration: "",
  };

  const [data, setData] = useState(defaultData);
  const handleAdd = (e: any) => {
    addData({ ...data, id });
    setData(defaultData);
    setId(id + 1);
  };
  return (
    <div className={Styles.dashboardContainer}>
      <Navbar />
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
                setData((d) => ({ ...d, image: src }));
              }}
            />
          </div>

          <div className={styled.titleGroup}>
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter title of the new post"
              onChange={(e) =>
                setData((d) => ({ ...d, title: e.target.value }))
              }
            />
          </div>

          <div className={styled.detailGroup}>
            <label>Description</label>
            <textarea
              name="detail"
              id=""
              placeholder="Enter detail description of your post"
              onChange={(e) =>
                setData((d) => ({
                  ...d,
                  desc: e.target.value,
                }))
              }
            ></textarea>
          </div>

          <div className={styled.priceGroup}>
            <label>Price</label>
            <input
              type="text"
              placeholder="Enter price of the new post"
              onChange={(e) =>
                setData((d) => ({
                  ...d,
                  cost: e.target.value,
                }))
              }
            />
          </div>

          <div className={styled.titleGroup}>
            <label>Duration</label>
            <input
              type="text"
              placeholder="Enter duration of the new post"
              onChange={(e) =>
                setData((d) => ({
                  ...d,
                  duration: e.target.value,
                }))
              }
            />
          </div>

          <div className={styled.postBtn}>
            <Link to="/dashboard" onClick={handleAdd}>
              Post
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
