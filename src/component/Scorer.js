import React from 'react';
import { Constants } from '../constants/Constants';
import PropTypes from 'prop-types';

export default class Scorer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { scoreText: Constants.INITIAL_SCORE };
    }

    componentDidUpdate(prevProps) {
        if (this.isPropsChanged(prevProps))
            this.setState({ scoreText: this.calculateScore() });
    }

    isPropsChanged = prevProps => {
        return prevProps.player1Score !== this.props.player1Score || prevProps.player2Score !== this.props.player2Score;
    }

    calculateScore = () => {
        const { player1Score, player2Score } = this.props;

        if (this.isBothScoredEqual()) {
            if (this.isDeuce())
                return Constants.DEUCE;
            return this.getTennisScoreWhenBothScoredEqual();
        }
        if (this.isBothScoredWithinForty())
            return this.getTennisScore();
        if (this.hasWinner())
            return this.getWinnerScore();
        if (player1Score > player2Score)
            return Constants.ADVANTAGE_PLAYER1;
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

    getTennisScoreWhenBothScoredEqual = () => {
        return Constants.TENNIS_SCORE[this.props.player1Score] + Constants.ALL;
    }

    isBothScoredEqual = () => {
        return this.props.player1Score === this.props.player2Score;
    }

    isBothScoredWithinForty = () => {
        return this.props.player1Score <= Constants.FORTY && this.props.player2Score <= Constants.FORTY;
    }

    getTennisScore = () => {
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
    player2Score: PropTypes.number.isRequired
}
