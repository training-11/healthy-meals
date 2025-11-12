import React, { useState } from "react";
import FilterButtons from "./FilterButtons";
import MenuCardList from "./MenuCardList";
import "./Menu.css";

const Menu = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = [
    "All",
    "High Protein",
    "Balanced",
    "Vegetarian",
    "Chef's Picks",
    "Custom Macros",
    "Low Carb",
  ];

  // sample items (replace img with real paths)
  const menuItems = [
    {
      id: 1,
      name: "Fiesta Chicken Bowl",
      kcal: 371,
      protein: "35g",
      carbs: "34g",
      fat: "10g",
      category: "High Protein",
      img: "/images/fiesta.jpg",
    },
    {
      id: 2,
      name: "Mexican Chicken Enchilada",
      kcal: 639,
      protein: "37g",
      carbs: "58g",
      fat: "29g",
      category: "Balanced",
      img: "/images/enchilada.jpg",
    },
    {
      id: 3,
      name: "Basil Chicken Alfredo",
      kcal: 641,
      protein: "64g",
      carbs: "64g",
      fat: "14g",
      category: "High Protein",
      img: "/images/alfredo.jpg",
    },
    {
      id: 4,
      name: "Koshari",
      kcal: 360,
      protein: "13g",
      carbs: "65g",
      fat: "5g",
      category: "Vegetarian",
      img: "/images/koshari.jpg",
    },
    {
      id: 5,
      name: "Steak & Mash",
      kcal: 480,
      protein: "40g",
      carbs: "30g",
      fat: "20g",
      category: "Chef's Picks",
      img: "/images/steak.jpg",
    },
    // add more...
  ];

  const filteredItems =
    selectedFilter === "All"
      ? menuItems
      : menuItems.filter((it) => it.category === selectedFilter);

  return (
    <section className="menu-wrap">
      <div className="menu-hero">
        <h1>Discover our daily-changing menu</h1>
        <p className="sub">
          80+ new meals options every week, you'll never get bored.
        </p>
        <button className="cta">See full menu</button>
      </div>

      <FilterButtons
        filters={filters}
        selected={selectedFilter}
        setSelected={setSelectedFilter}
      />

      <MenuCardList items={filteredItems} />
    </section>
  );
};

export default Menu;
