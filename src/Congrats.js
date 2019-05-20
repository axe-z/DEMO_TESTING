import React from "react";
import PropTypes from "prop-types";

const Congrats = props => {
  return props.success ? (
    <div className="App" data-test="component-congrats">
      <span data-test="congrats-message">Felicitation!</span>
    </div>
  ) : (
    <div className="App" data-test="component-congrats" />
  );
};

export default Congrats;

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};
