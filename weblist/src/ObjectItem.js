import PropTypes from "prop-types";

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
