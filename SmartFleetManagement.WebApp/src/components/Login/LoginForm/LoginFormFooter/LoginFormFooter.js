import React from 'react';
import styles from './loginFormFooter.module.scss';
import DiscreteLink from '../../../../shared/ui/DiscreteLink/DiscreteLink';
import { useTranslation } from 'react-i18next';
import namespaces from '../../../../internationalization/namespaces';
import PropTypes from 'prop-types';

const LoginFormFooter = props => {
  const { t } = useTranslation(namespaces.login);

  return (
    <div className={styles.container}>
      <ul>
        <li>
          <DiscreteLink onClick={props.onCreateAccount} text={t('createAccount')} />
        </li>
        <li>
          <DiscreteLink onClick={props.onForgotPassword} text={t('forgotPassword')} />
        </li>
      </ul>
    </div>
  );
};

LoginFormFooter.propTypes = {
  onCreateAccount: PropTypes.func.isRequired,
  onForgotPassword: PropTypes.func.isRequired
};

export default LoginFormFooter;
