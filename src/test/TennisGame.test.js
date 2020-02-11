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
  
  it("should have a reset Button to rest the Game", () => {
    expect(wrapper.find("button").at(2).text()).toEqual("Reset Game");
  });
});

describe(("<TennisGame/> Game functionality"), () => {
  let wrapper, scoreLabel, player1ScoreButton, player2ScoreButton;
  beforeEach(() => {
    wrapper = mount(< TennisGame />);
    scoreLabel = wrapper.find(Scorer).find("label");
    player1ScoreButton = wrapper.find(Player).at(0).find("button");
    player2ScoreButton = wrapper.find(Player).at(1).find("button");
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

  it("On Player 2 Scores once, Score Should be Love Fifteen", () => {
    player2ScoreButton.simulate('click');
    expect(scoreLabel.text()).toEqual("Love,Fifteen");
  });

  it("On Player 2 Scores twice, Score Should be Love Thirty", () => {
    playerPlays(player2ScoreButton, 2);
    expect(scoreLabel.text()).toEqual("Love,Thirty");
  });

  it("On Player 2 Scores thrice, Score Should be Love Forty", () => {
    playerPlays(player2ScoreButton, 3);
    expect(scoreLabel.text()).toEqual("Love,Forty");
  });

  it("On Player 1 Scores twice and Player 2 Scores once, Score Should be Thirty Fifteen", () => {
    playerPlays(player1ScoreButton, 2);
    player2ScoreButton.simulate('click');
    expect(scoreLabel.text()).toEqual("Thirty,Fifteen");
  });

  it("On both Players Scores once, Score Should be Fifteen all", () => {
    player1ScoreButton.simulate('click');
    player2ScoreButton.simulate('click');
    expect(scoreLabel.text()).toEqual("Fifteen all");
  });

  it("On both Players Scores twice, Score Should be Thirty all", () => {
    playerPlays(player1ScoreButton, 2);
    playerPlays(player2ScoreButton, 2);
    expect(scoreLabel.text()).toEqual("Thirty all");
  });

  it("On both Players Scores thrice, Score Should be Deuce", () => {
    playerPlays(player1ScoreButton, 3);
    playerPlays(player2ScoreButton, 3);
    expect(scoreLabel.text()).toEqual("Deuce");
  });

  it("On Player 1 Scores four times, Score Should be Player 1 wins", () => {
    playerPlays(player1ScoreButton, 4);
    expect(scoreLabel.text()).toEqual("Player 1 wins");
  });

  it("On Player 1 Scores twice and Player 2 scores four times, Score Should be Player 2 wins", () => {
    playerPlays(player1ScoreButton, 2);
    playerPlays(player2ScoreButton, 4);
    expect(scoreLabel.text()).toEqual("Player 2 wins");
  });

  it("On both Players Scores four times, Score Should be Deuce", () => {
    playerPlays(player1ScoreButton, 4);
    playerPlays(player2ScoreButton, 4);
    expect(scoreLabel.text()).toEqual("Deuce");
  });

  it("On Player 1 Scores four times and Player 2 Scores three times, Score Should be Advantage Player 1", () => {
    playerPlays(player1ScoreButton, 4);
    playerPlays(player2ScoreButton, 3);
    expect(scoreLabel.text()).toEqual("Advantage Player 1");
  });

  it("On Player 1 Scores thrice and Player 2 Scores four times, Score Should be Advantage Player 2", () => {
    playerPlays(player1ScoreButton, 3);
    playerPlays(player2ScoreButton, 4);
    expect(scoreLabel.text()).toEqual("Advantage Player 2");
  });
  
  it("On Reset the Game, Score Should be Love All", () => {
    playerPlays(player1ScoreButton, 2);
    playerPlays(player2ScoreButton, 2);
    wrapper.find("button").at(2).simulate('click');
    expect(scoreLabel.text()).toEqual("Love all");
  });
});

function playerPlays(button, times) {
  for (let index = 0; index < times; index++) {
    button.simulate('click');
  }
}
