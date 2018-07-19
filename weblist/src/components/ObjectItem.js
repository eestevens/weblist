import React from "react";
import PropTypes from "prop-types";
import "./ObjectItem.css";

function ObjectItem(props){

  var color = getColor(props);
  var style = "font-weight: bold;";
  return (
    <div className="object-item">
      <span className="span-heading">{props.name}</span><br/>
      <span>{props.username} | {props.email} | {color}</span><br/>
      <span>{props.creatureText}</span><br/>
      <img src={props.image} />
    </div>
  );
}

function getColor(props) {
  return props.color;
  var color = "Uncolored";
  if(props.color == "U") {
    color = "Blue";
  } else if (props.color == "W") {
    color = "White";
  } else if (props.color == "B") {
    color = "Black";
  } else if(props.color == "G") {
    color = "Green";
  } else if (props.color == "R,B" || props.color == "R") {
    color = "Red";
  }
  return color;
}

ObjectItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default ObjectItem;
