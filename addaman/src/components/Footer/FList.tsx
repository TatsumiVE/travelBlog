import React from "react";

type Props = {
  listName: string;
};

const FList: React.FC<Props> = ({ listName }) => {
  return (
    <>
      <li>
        <a href="./" target="_self">
          {listName}
        </a>
      </li>
    </>
  );
};

export default FList;
