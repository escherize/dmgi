import React, { Component } from "react";
import PropTypes from 'prop-types';

class LoadingSpinner extends Component {

    render() {
        var { width, height, borderWidth, className, spinnerClassName } = this.props;
        return (
            <div className={className}>
                <div className={spinnerClassName} style={{ width, height, borderWidth }}></div>
            </div>
        );
    }
}

LoadingSpinner.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    borderWidth: PropTypes.string,
    className: PropTypes.string,
    spinnerClassName: PropTypes.string,
};

LoadingSpinner.defaultProps = {
    width: '32px',
    height: '32px',
    borderWidth: '4px',
    fill: 'currentcolor',
    spinnerClassName: 'LoadingSpinner'
};

export default LoadingSpinner
