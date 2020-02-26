import React from 'react';
import styles from './forgotPasswordForm.module.scss';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import namespaces from '../../../internationalization/namespaces';
import { Input, Button } from 'semantic-ui-react';
import DiscreteLink from '../../../shared/ui/DiscreteLink/DiscreteLink';
import PropTypes from 'prop-types';

const ForgotPasswordForm = props => {
  const { t } = useTranslation(namespaces.login);

  return (
    <Form className={styles.form}>
      <h1>{t("forgotPasswordTitle")}</h1>
      <h5>{t("forgotPasswordSubtitle")}</h5>
      <Input
        className={styles.roundInput}
        size="large"
        placeholder={t("usernameOrEmail")}
        type="text"
        autoComplete="username"
      />
      <Button
        fluid
        className={styles.resetBtn}
        color="green"
        size="large"
      >
        {t("resetPassword")}
      </Button>
      <DiscreteLink onClick={props.onLoginAccount} text={t("signIn")} />
    </Form>
  );
};

ForgotPasswordForm.propTypes = {
  onLoginAccount: PropTypes.func.isRequired
};

export default ForgotPasswordForm;
