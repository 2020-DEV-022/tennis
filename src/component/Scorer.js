import React from 'react';
import { Constants } from '../constants/Constants';
import PropTypes from 'prop-types';

export default class Scorer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { scoreText: Constants.INITIAL_SCORE };
    }

    componentDidUpdate(prevProps) {
        if (this.isPlayerScoreChanged(prevProps)) {
            this.setState({ scoreText: this.calculateScore() });
        }
    }

    isPlayerScoreChanged = prevProps => {
        return prevProps.player1Score !== this.props.player1Score || prevProps.player2Score !== this.props.player2Score;
    }

    calculateScore = () => {
        if (this.isBothScoredEqual()) {
            if (this.isDeuce()) {
                return Constants.DEUCE;
            }
            return this.getScoreOnEqual();
        }
        if (this.isBothScoredWithinForty()) {
            return this.getScore();
        }
        if (this.hasWinner()) {
            this.props.onGameOver();
            return this.getWinnerScore();
        }
        return this.getAdvantageScore();
    }

    getAdvantageScore = () => {
        return Constants.ADVANTAGE + this.getPlayerWithHighestScore();
    }

    isDeuce = () => {
        return this.props.player1Score >= Constants.FORTY;
    }

    hasWinner = () => {
        return Math.abs(this.props.player1Score - this.props.player2Score) > 1;
    }

    getWinnerScore = () => {
        return this.getPlayerWithHighestScore() + Constants.WIN;
    }

    getPlayerWithHighestScore = () => {
        return this.props.player1Score > this.props.player2Score ? Constants.PLAYER1_NAME : Constants.PLAYER2_NAME;
    }

    getScoreOnEqual = () => {
        return Constants.TENNIS_SCORE[this.props.player1Score] + Constants.ALL;
    }

    isBothScoredEqual = () => {
        return this.props.player1Score === this.props.player2Score;
    }

    isBothScoredWithinForty = () => {
        return this.props.player1Score <= Constants.FORTY && this.props.player2Score <= Constants.FORTY;
    }

    getScore = () => {
        return Constants.TENNIS_SCORE[this.props.player1Score] +
            Constants.COMMA + Constants.TENNIS_SCORE[this.props.player2Score];
    }

    render() {
        return (
            <div>
                <h5>{Constants.SCORER_HEADER}</h5>
                <label>{this.state.scoreText}</label>
            </div>
        );
    }
}

Scorer.propTypes = {
    player1Score: PropTypes.number.isRequired,
    player2Score: PropTypes.number.isRequired,
    onGameOver: PropTypes.func.isRequired
}
