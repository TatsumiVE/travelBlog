import React from "react";
// type Props = {
//   button: button;
//   onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
// };

type Props = {
  className: string;
  label: string;
  // onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const Button: React.FC<Props> = ({ className, label }) => {
  return (
    <div className={className}>
      <a href="./"> {label}</a>
    </div>
  );
};

export default Button;
