import React from "react";
import PropTypes from "prop-types";
import "./ObjectItem.css";

function ObjectItem(props) {
  var backgroundColor = "#FF0000";
  if(props.color === "Z") {
    backgroundColor = "coral";
  }
  return (
    <div className="object-item">
      <span>{props.name}</span><br/>
      <span>{props.username}</span><br/>
      <span>{props.email}</span><br/>
      <span>{props.creatureText}</span><br/>
      <span>{props.color}</span><br/>
      <img src={props.image} />
    </div>
  );
}

ObjectItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default ObjectItem;
