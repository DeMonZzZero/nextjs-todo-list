import React from "react";

export default function ListItem({ item, delClick,  checkBoxChange }) {
    return (
      <li>
        <input type="checkbox" checked={item.checked} onClick={checkBoxChange} />
        <span>
          {item.str} ({item.id}) 
          {item.checked && '(выполнено)'}
        </span>
        <span className="cross" onClick={delClick}>×</span>
      </li>
    );
  }
