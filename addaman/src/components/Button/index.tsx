import React from "react";
import { Link } from "react-router-dom";
// type Props = {
//   button: button;
//   onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
// };

type Props = {
  className: string;
  label: string;
};
const Button: React.FC<Props> = ({ className, label }) => {
  return (
    <div className={className}>
      <Link to="/detail:id"> {label}</Link>
    </div>
  );
};

export default Button;
