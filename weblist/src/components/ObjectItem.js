import React from "react";
import PropTypes from "prop-types";
import "./ObjectItem.css";

function ObjectItem(props){
  var output= displayProperties(props);
  return (
    <div className="object-item">
      <span className="span-heading">{props.name}</span><br/>
      <span>{output}</span><br/>
      <span>{props.creatureText}</span><br/>
      <img src={props.image} />
    </div>
  );
}

function displayProperties(props) {
  var output = props.username + " | " + props.email + " | ";
  if(props.power && props.toughness) {
    output = output + props.power + "/" + props.toughness + " | ";
  }
   output = output + props.color ;
  return output;
}

ObjectItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default ObjectItem;
