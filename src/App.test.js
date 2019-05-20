import React from "react";
import Enzyme, { configure, mount, shallow, render } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

///////////////////////////////////////////////////////////////////////////////////////////////
////helper FN
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Factory function pour creer un ShallowWrapper pour le compoment App.
 * @function setup
 * @param {object} props - Component props specifique a ce setup
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  //ajouter notre state au wrapper
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * return shallowWrapper qui contain le nodes avec l attr data-test
 * @param {ShallowWrapper} wrapper - wrapper enzyme
 * @param {string} val - value du data-test
 * @returns {ShallowWrapper}
 */

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

///////////////////////////////////////////////////////////////////////////////////////////////
////tests apps
///////////////////////////////////////////////////////////////////////////////////////////////

test("renders without crashing", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");

  expect(appComponent.length).toBe(1);
});

test("renders the button", () => {
  const wrapper = setup();
  const button = wrapper.find("button");

  expect(button.length).toBe(1);
});

test("renders the counter", () => {
  const wrapper = setup();
  const counter = findByTestAttr(wrapper, "counter-display");
  expect(counter.length).toBe(1);
});

test("renders the counter at 0", () => {
  const wrapper = setup();
  // const initialCounterState = wrapper.state("counter");

  // expect(initialCounterState).toEqual(0);
  expect(wrapper.state("counter")).toBe(0);
});

it("clicking the button increment the counter in the browser", () => {
  //donner une val a notre counter
  const counter = 7;
  const wrapper = setup(null, { counter });

  const button = wrapper.find("button");
  button.simulate("click");
  // wrapper.update();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain("8");
  // expect(wrapper.state("counter")).toBe(8);
});
