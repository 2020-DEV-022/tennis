import React from 'react';
import { mount } from 'enzyme';
import TennisGame from "../component/TennisGame";
import Player from "../component/Player";
import Scorer from "../component/Scorer";

describe(("<TennisGame/> component"), () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(< TennisGame />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have two players and one scorer", () => {
    expect(wrapper.find(Player).length).toBe(2);
    expect(wrapper.find(Scorer).length).toBe(1);
  });
});

describe(("<TennisGame/> Game functionality"), () => {
  let wrapper, scoreLabel, player1ScoreButton;
  beforeEach(() => {
    wrapper = mount(< TennisGame />);
    scoreLabel = wrapper.find(Scorer).find("label");
    player1ScoreButton = wrapper.find(Player).at(0).find("button");
  });

  it("On Game Start, Score Should be Love All", () => {
    expect(scoreLabel.text()).toEqual("Love all");
  });

  it("On Player 1 Scores once, Score Should be Fifteen Love", () => {
    player1ScoreButton.simulate('click');
    expect(scoreLabel.text()).toEqual("Fifteen,Love");
  });

  it("On Player 1 Scores twice, Score Should be Thirty Love", () => {
    playerPlays(player1ScoreButton, 2);
    expect(scoreLabel.text()).toEqual("Thirty,Love");
  });

  it("On Player 1 Scores thrice, Score Should be Forty Love", () => {
    playerPlays(player1ScoreButton, 3);
    expect(scoreLabel.text()).toEqual("Forty,Love");
  });
});

function playerPlays(button, times) {
  for (let index = 0; index < times; index++) {
    button.simulate('click');
  }
}
