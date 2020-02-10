import React from 'react';
import { shallow } from 'enzyme';
import Player from '../component/Player';

describe(("<Player/> component with props"), () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(< Player name="Player 1" />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have passed heading from props", () => {
    expect(wrapper.find("h5").text()).toEqual("Player 1");
  });
});