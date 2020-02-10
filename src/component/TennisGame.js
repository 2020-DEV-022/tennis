import React from 'react';
import Player from './Player';
import Scorer from './Scorer';
import { Constants } from '../constants/Constants';

export default class TennisGame extends React.Component {
    render() {
        return (
            <div>
                <div className="playerContainer">
                    <div className="leftContainer">
                        <Player name={Constants.PLAYER1_NAME} />
                    </div>
                    <Player name={Constants.PLAYER2_NAME} />
                </div>
                <Scorer />
            </div>);
    }
}