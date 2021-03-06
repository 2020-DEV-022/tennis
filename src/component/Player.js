import React from 'react';
import { Constants } from '../constants/Constants';
import PropTypes from 'prop-types';

export default class Player extends React.Component {
    onUpdateScore = () => {
        this.props.onUpdateScore(this.props.name);
    }

    render() {
        if (!this.props.isGameOver) {
            return (
                <div>
                    <h5>{this.props.name}</h5>
                    <button onClick={this.onUpdateScore} >{Constants.PLAYER_BUTTON_TEXT}</button>
                </div>
            );
        }
        return (<h5>{this.props.name}</h5>);
    }
}

Player.propTypes = {
    name: PropTypes.string.isRequired,
    onUpdateScore: PropTypes.func.isRequired,
    isGameOver: PropTypes.bool.isRequired
}