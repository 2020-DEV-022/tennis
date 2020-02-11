import React from 'react';
import Player from './Player';
import Scorer from './Scorer';
import { Constants } from '../constants/Constants';

export default class TennisGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player1Score: 0,
            player2Score: 0,
            isGameOver: false
        };
    }

    incrementScore = player => {
        this.setState((prevState) => (
            player === Constants.PLAYER1_NAME ?
                { player1Score: prevState.player1Score + 1 }
                : { player2Score: prevState.player2Score + 1 }));
    }

    notifyGameOver = () => {
        this.setState((prevState, props) => ({
            isGameOver: !prevState.isGameOver
        }));
    }

    resetGame = () => {
        this.setState({
            player1Score: 0,
            player2Score: 0,
            isGameOver: false
        });
    }

    render() {
        return (
            <div>
                <div className="playerContainer">
                    <div className="leftContainer">
                        <Player name={Constants.PLAYER1_NAME} onUpdateScore={this.incrementScore} isGameOver={this.state.isGameOver} />
                    </div>
                    <Player name={Constants.PLAYER2_NAME} onUpdateScore={this.incrementScore} isGameOver={this.state.isGameOver} />
                </div>
                <Scorer player1Score={this.state.player1Score} player2Score={this.state.player2Score} onGameOver={this.notifyGameOver} />
                <br /><button onClick={this.resetGame}>{Constants.RESET_BUTTON_TEXT}</button>
            </div>);
    }
}