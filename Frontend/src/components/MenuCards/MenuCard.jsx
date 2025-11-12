import React from "react";

const MenuCard = ({ item }) => {
  return (
    <article className="menu-card">
      <div className="thumb">
        <img src={item.img} alt={item.name} />
        <div className="kcal-badge">{item.kcal} kcal</div>
      </div>
      <div className="card-body">
        <h3 className="card-title">{item.name}</h3>
        <div className="macros">
          <span className="dot green">{item.protein} Protein</span>
          <span className="dot yellow">{item.carbs} Carbs</span>
          <span className="dot red">{item.fat} Fat</span>
        </div>
      </div>
    </article>
  );
};

export default MenuCard;
