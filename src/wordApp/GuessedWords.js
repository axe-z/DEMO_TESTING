import React from "react";
import PropTypes from "prop-types";

const GuessesWords = props => {
  return (
    <div data-test="component-guessed">
      {props.guessedWord && <div data-test="guess-instructions"> vous devez ecrire jouale</div>}
    </div>
  );
};

export default GuessesWords;

GuessesWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};
