import React, { useContext, useState } from "react";
import styled from "./Style.module.css";
import Styles from "../main.module.css";
import { Link } from "react-router-dom";
import { CrudContext } from "../../../DestinationData/context";
import Navbar from "../Navbar";
const Update = () => {
  const { oldData, updateData } = useContext(CrudContext);
  const defaultData = {
    id: oldData.id,
    image: "",
    title: "",
    desc: "",
    cost: "",
    duration: "",
  };

  const [newData, setNewData] = useState(oldData);
  console.log("hello update", oldData, newData);
  const handleUpdate = (e: any) => {
    updateData(newData);
    setNewData(defaultData);
  };
  return (
    <div className={Styles.dashboardContainer}>
      <Navbar />

      <div className={styled.create}>
        <div className={styled.createContent}>
          <h3 className={styled.iname}>Update Blog Data</h3>
        </div>
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
                setNewData((d: any) => ({ ...d, image: src }));
              }}
            />
          </div>

          <div className={styled.titleGroup}>
            <label>Title</label>
            <input
              value={newData.title}
              type="text"
              placeholder="Enter title of the new post"
              onChange={(e) =>
                setNewData((d: any) => ({
                  ...d,
                  title: e.target.value,
                }))
              }
            />
          </div>

          <div className={styled.detailGroup}>
            <label>Description</label>
            <textarea
              name="detail"
              id=""
              value={newData.desc}
              rows={10}
              cols={5}
              placeholder="Enter detail description of your post"
              onChange={(e) =>
                setNewData((d: any) => ({
                  ...d,
                  desc: e.target.value,
                }))
              }
            ></textarea>
          </div>

          <div className={styled.priceGroup}>
            <label>Price</label>
            <input
              value={newData.cost}
              type="text"
              placeholder="Enter price of the new post"
              onChange={(e) =>
                setNewData((d: any) => ({
                  ...d,
                  cost: e.target.value,
                }))
              }
            />
          </div>

          <div className={styled.titleGroup}>
            <label>Duration</label>
            <input
              value={newData.duration}
              type="text"
              placeholder="Enter duration of the new post"
              onChange={(e) =>
                setNewData((d: any) => ({
                  ...d,
                  duration: e.target.value,
                }))
              }
            />
          </div>

          <div className={styled.postBtn} onClick={handleUpdate}>
            <Link to="/dashboard">Update</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
