import React from "react";
import PropTypes from "prop-types";
import "./ObjectItem.css";

function ObjectItem(props) {
  var color = "Uncolored" + props.color;
  if(props.color == "U") {
    color = "Blue";
  } else if (props.color == "W") {
    color = "White";
  } else if (props.color == "B") {
    color = "Black";
  } else if(props.color == "G") {
    color = "Green";
  } else if (props.color == "R,B") {
    color = "Red";
  }
  return (
    <div className="object-item">
      <span>{props.name}</span><br/>
      <span>{props.username}</span><br/>
      <span>{props.email}</span><br/>
      <span>{props.creatureText}</span><br/>
      <span>{color}</span><br/>
      <img src={props.image} />
    </div>
  );
}

ObjectItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default ObjectItem;
