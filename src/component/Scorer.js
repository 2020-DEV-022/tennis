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
        return prevProps.player1Score !== this.props.player1Score;
    }

    calculateScore = () => {
        const { player1Score } = this.props;

        if (player1Score <= Constants.FORTY)
            return Constants.TENNIS_SCORE[player1Score] + Constants.COMMA_LOVE;
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
    player1Score: PropTypes.number.isRequired
}
