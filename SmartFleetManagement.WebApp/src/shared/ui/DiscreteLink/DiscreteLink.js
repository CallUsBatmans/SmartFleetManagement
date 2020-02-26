import React from 'react';
import PropTypes from 'prop-types';
import styles from './discreteLink.module.scss';

const DiscreteLink = props => (
  <p onClick={props.onClick} className={styles.discreteLink}>
    {props.text}
  </p>
);

DiscreteLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.any
};

export default DiscreteLink;
