import React from 'react';
import { Constants } from '../constants/Constants';

export default class Scorer extends React.Component {
    render() {
        return (
            <div>
                <h5>{Constants.SCORER_HEADER}</h5>
                <label>{Constants.INITIAL_SCORE}</label>
            </div>
        );
    }
}