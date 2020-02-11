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
            if (player1Score === Constants.FORTY)
                return Constants.DEUCE;
            if (player1Score <= Constants.THIRTY)
                return this.getTennisScoreWhenBothScoredEqual();
        }
        if (this.isBothScoredWithinForty())
            return this.getTennisScore();
        if (player1Score - player2Score > 1)
            return Constants.PLAYER1_WIN;
        if (player2Score - player1Score > 1)
            return Constants.PLAYER2_WIN;
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
