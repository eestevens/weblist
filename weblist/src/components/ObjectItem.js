import React from "react";
import PropTypes from "prop-types";
import "./ObjectItem.css";

function ObjectItem(props){
  var propertyOutput= displayProperties(props);
  return (
    <div className="object-item">
      <span className="span-heading">{props.name}</span><br/>
      <span>{propertyOutput}</span><br/>
      <span>{props.creatureText}</span><br/>
      <span className="creature-flavor">{props.flavor}</span><br/>
      <img src={props.image} alt={props.name} />
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
