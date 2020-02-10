import React from 'react';
import { shallow } from 'enzyme';
import Player from '../component/Player';

describe(("<Player/> component with props"), () => {
  let wrapper, updateScore;
  beforeEach(() => {
    updateScore = jest.fn();
    wrapper = shallow(< Player name="Player 1" onUpdateScore={updateScore} />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have passed heading from props", () => {
    expect(wrapper.find("h5").text()).toEqual("Player 1");
  });

  it("should display button for scoring", () => {
    expect(wrapper.find("button").length).toBe(1);
    expect(wrapper.find("button").text()).toEqual("Scored");
    wrapper.find("button").simulate('click');
    expect(updateScore).toHaveBeenCalled();
    expect(updateScore).toHaveBeenCalledTimes(1);
  });
});