import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "./test/testUtils";

import GuessedWords from "./wordApp/GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
};
//setup s importe mal on a besoin du component.
const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<GuessedWords {...setupProps} />);
  //ajouter notre state au wrapper
  if (state) wrapper.setState(state);
  return wrapper;
};

test("renders without crashing", () => {
  const wrapper = setup();
  const congratsComponent = findByTestAttr(wrapper, "component-guessed");

  expect(congratsComponent.length).toBe(1);
});

test("n envoie pas de warning avec les props entendue", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("si aucun props est tenté", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWord: [] });
  });
  test("tester sans props", () => {
    // const wrapper = setup({ guessedWord: [] });
    const guessedComponent = findByTestAttr(wrapper, "component-guessed");
    expect(guessedComponent.length).toBe(1);
  });
  test("donne les intructions a un mot tenté", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0); //not !renverse
  });
});

describe("si des mots sont testé", () => {});
