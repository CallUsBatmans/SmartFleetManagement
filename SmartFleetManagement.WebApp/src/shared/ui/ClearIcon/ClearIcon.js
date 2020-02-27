import React from 'react';
import styles from './clearIcon.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '../Tooltip/Tooltip';
import { useTranslation } from 'react-i18next';
import namespaces from '../../../internationalization/namespaces';
import PropTypes from 'prop-types';

const ClearIcon = props => {
  const { t } = useTranslation(namespaces.clearIcon);

  return (
    <Tooltip content={t('clear')}>
      <FontAwesomeIcon onClick={props.onClear} className={styles.clearIcon} icon={faTimesCircle} />
    </Tooltip >
  );
};

ClearIcon.propTypes = {
  onClear: PropTypes.func.isRequired
};

export default ClearIcon;
