import React from "react";
import PropTypes from "prop-types";
import "./ObjectItem.css";

function ObjectItem(props) {
  return (
    <div className="object-item">
      <span>{props.name}</span>
    </div>
  );
}

ObjectItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default ObjectItem;
