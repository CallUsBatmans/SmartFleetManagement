import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const FieldValidator = props => {
  const styles = {
    textAlign: props.align || 'right'
  };

  return (
    <Form.Control.Feedback type="invalid" style={styles}>{props.error}</Form.Control.Feedback>
  )
};

FieldValidator.propTypes = {
  error: PropTypes.string,
  align: PropTypes.string
};

export default FieldValidator;
