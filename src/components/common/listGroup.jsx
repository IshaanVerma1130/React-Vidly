import React from "react";

const ListGroups = (props) => {
  const { items, onItemSelect, valueProperty, textProperty, selectedItem } =
    props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroups.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroups;
