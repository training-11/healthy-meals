import React from "react";

const FilterButtons = ({ filters, selected, setSelected }) => {
  return (
    <div className="filters-row">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setSelected(f)}
          className={`filter-pill ${selected === f ? "active" : ""}`}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
