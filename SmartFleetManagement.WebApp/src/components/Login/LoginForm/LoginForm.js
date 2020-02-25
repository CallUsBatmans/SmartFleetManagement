import React from 'react';
import styles from './loginForm.module.scss';
import { useTranslation } from 'react-i18next';
import namespaces from '../../../internationalization/namespaces';
import { Form } from 'react-bootstrap';
import { Button, Input, Checkbox } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faLock } from '@fortawesome/free-solid-svg-icons';
import LinkLanguageSelector from '../../../shared/ui/LanguageSelector/LinkLanguageSelector';

const LoginForm = props => {
  const { t } = useTranslation(namespaces.login)

  return (
    <Form className={styles.form}>
      <LinkLanguageSelector />
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
      <Checkbox toggle label={t("rememberMe")} />
      <Button
        fluid
        className={styles.loginBtn}
        color="blue"
        size="large"
      >
        {t("login")}
      </Button>
    </Form>
  )
};

export default LoginForm;
