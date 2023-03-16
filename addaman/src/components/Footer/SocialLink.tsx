import React from "react";

type Props = {
  icon: string;
};

const SocialLink: React.FC<Props> = ({ icon }) => {
  return (
    <>
      <li>
        <a href="./" target="_self">
          <i className={icon}></i>
        </a>
      </li>
    </>
  );
};
export default SocialLink;
