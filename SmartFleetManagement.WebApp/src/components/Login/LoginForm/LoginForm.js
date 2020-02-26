import React from 'react';
import styles from './loginForm.module.scss';
import { useTranslation } from 'react-i18next';
import namespaces from '../../../internationalization/namespaces';
import { Form } from 'react-bootstrap';
import { Button, Input, Checkbox } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faLock } from '@fortawesome/free-solid-svg-icons';
import LoginFormFooter from './LoginFormFooter/LoginFormFooter';
import PropTypes from 'prop-types';

const LoginForm = props => {
  const { t } = useTranslation(namespaces.login)

  return (
    <Form className={styles.form}>
      <h1>{t("title")}</h1>
      <h5>{t("subtitle")}</h5>
      <Input
        className={styles.roundInput}
        icon={<FontAwesomeIcon className={styles.icon} icon={faUserTie} />}
        iconPosition='left'
        size="large"
        placeholder={t("username")}
        type="text"
        autoComplete="username"
      />
      <Input
        className={styles.roundInput}
        icon={<FontAwesomeIcon className={styles.icon} icon={faLock} />}
        iconPosition='left'
        size="large"
        placeholder={t("password")}
        type="password"
        autoComplete="current-password"
      />
      <div className={styles.rememberMe}>
        <Checkbox toggle label={t("rememberMe")} />
      </div>
      <Button
        fluid
        className={styles.loginBtn}
        color="blue"
        size="large"
      >
        {t("login")}
      </Button>
      <LoginFormFooter
        onCreateAccount={props.onCreateAccount}
        onForgotPassword={props.onForgotPassword}
      />
    </Form>
  )
};

LoginForm.propTypes = {
  onCreateAccount: PropTypes.func.isRequired,
  onForgotPassword: PropTypes.func.isRequired
};

export default LoginForm;
