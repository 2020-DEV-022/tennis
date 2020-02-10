import React from 'react';
import { Constants } from '../constants/Constants';
import PropTypes from 'prop-types';

export default class Player extends React.Component {
    render() {
        return (
            <div>
                <h5>{this.props.name}</h5>
                <button onClick={this.props.onUpdateScore} >{Constants.PLAYER_BUTTON_TEXT}</button>
            </div>
        );
    }
}

Player.propTypes = {
    name: PropTypes.string.isRequired,
    onUpdateScore: PropTypes.func
}