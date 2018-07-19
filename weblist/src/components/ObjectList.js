import React from "react";
import PropTypes from "prop-types";

// import the Contact component
import ObjectItem from "./ObjectItem";

function ObjectList(props) {
  return (
    <div>{props.objectItems.map(c => <ObjectItem key={c.id}
      name={c.name} email={c.email} username={c.username}
      creatureText={c.creatureText} color={c.color} image={c.image} toughness={c.toughness} power={c.power}/>)}</div>
  );
}

ObjectList.propTypes = {
  objectItems: PropTypes.array.isRequired
};

export default ObjectList;
