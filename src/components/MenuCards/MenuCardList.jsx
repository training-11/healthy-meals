import React from "react";
import MenuCard from "./MenuCard";

const MenuCardList = ({ items }) => {
  return (
    <div className="cards-container">
      {items.map((item) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuCardList;
