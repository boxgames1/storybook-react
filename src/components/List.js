import React from "react";

const List = props => (
  <div className="List">
    <ul>
      {props.list.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  </div>
);

export default List;
