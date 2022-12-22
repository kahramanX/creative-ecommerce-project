import React from "react";
import "assets/styles/components/shared/menuItem.scss";
import { Link } from "react-router-dom";

type Props = {
  linkName: string;
  linkIconName?: string;
  link?: string;
  action?: any;
};

const LinkItem: React.FC<Props> = ({
  linkName,
  linkIconName,
  link = "#",
  action,
}) => {
  return (
    <Link to={link} className="menu-item" onClick={() => action()}>
      {linkName}
      {linkIconName && (
        <span className="material-symbols-outlined">{linkIconName}</span>
      )}
    </Link>
  );
};

export default LinkItem;
