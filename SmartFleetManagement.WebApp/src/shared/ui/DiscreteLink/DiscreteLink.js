import React from 'react';
import PropTypes from 'prop-types';
import styles from './discreteLink.module.scss';

const DiscreteLink = props => (
  <a
    _target={props.target || "_self"}
    href="#lng"
    onClick={props.onClick}
    className={styles.discreteLink}
  >
    {props.text}
  </a>
);

DiscreteLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  target: PropTypes.string,
  text: PropTypes.any
};

export default DiscreteLink;
