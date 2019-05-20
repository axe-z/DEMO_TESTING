import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "./test/testUtils";
import Congrats from "./wordApp/Congrats";

const defaultProps = { success: false };

//setup s importe mal on a besoin du component.
const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Congrats {...setupProps} />);
  //ajouter notre state au wrapper
  if (state) wrapper.setState(state);
  return wrapper;
};

test("renders without crashing", () => {
  const wrapper = setup();
  const congratsComponent = findByTestAttr(wrapper, "component-congrats");

  expect(congratsComponent.length).toBe(1);
});

test("renders rien quand 'success props' est false", () => {
  const wrapper = setup();
  const congratsComponent = findByTestAttr(wrapper, "component-congrats");

  expect(congratsComponent.text()).toBe("");
});

test("renders nono-empty congrats message quand success is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "component-congrats");

  expect(message.text()).toBe("Felicitation!");
});

test("ne retourne pas de warnings avec les props convenus", () => {
  const expectedProps = { success: false };
  // const propError = checkPropTypes(Congrats.propTypes, expectedProps, "prop", Congrats.name);
  checkProps(Congrats, expectedProps);
  // expect(propError).toBeUndefined();
});
