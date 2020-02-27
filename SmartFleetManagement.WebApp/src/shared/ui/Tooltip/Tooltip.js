import React from 'react';
import { Popup } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { random } from 'lodash';

const Tooltip = props => (
  <Popup
    content={props.content}
    key={props.toolTipKey || random(85428975)}
    trigger={props.children}
  />
);

Tooltip.propTypes = {
  content: PropTypes.string.isRequired,
  toolTipKey: PropTypes.any,
  children: PropTypes.any.isRequired
};

export default Tooltip;
