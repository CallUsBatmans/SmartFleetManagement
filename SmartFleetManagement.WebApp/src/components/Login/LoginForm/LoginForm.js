import React, { useState } from 'react';
import styles from './loginForm.module.scss';
import { useTranslation } from 'react-i18next';
import namespaces from '../../../internationalization/namespaces';
import { Form, InputGroup } from 'react-bootstrap';
import { Button, Checkbox } from 'semantic-ui-react';
import LoginFormFooter from './LoginFormFooter/LoginFormFooter';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '../../../shared/ui/Tooltip/Tooltip';
import * as yup from 'yup';
import { Formik } from 'formik';
import FieldValidator from '../../../shared/ui/FieldValidator/FieldValidator';
import ClearIcon from '../../../shared/ui/ClearIcon/ClearIcon';

const initialState = {
  username: '',
  password: '',
  rememberMe: false
};

const LoginForm = props => {
  const { t } = useTranslation(namespaces.login)

  const [showPassword, setShowPassword] = useState(false);

  const showPasswordIcon = (
    <Tooltip content={showPassword ? t('hidePassword') : t('showPassword')}>
      <FontAwesomeIcon
        className={styles.showPasswordIcon}
        icon={showPassword ? faEyeSlash : faEye}
        onClick={() => setShowPassword(!showPassword)}
      />
    </Tooltip>
  );

  const schema = yup.object({
    username: yup.string().required(t('validation::required')),
    password: yup.string().required(t('validation::required'))
  });

  return (
    <Formik
      validationSchema={schema}
      initialValues={initialState}
      onSubmit={props.onLogin}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
        setFieldValue
      }) => (
          <Form noValidate onSubmit={handleSubmit} className={styles.form}>
            <h1>{t('title')}</h1>
            <h5>{t('subtitle')}</h5>
            <Form.Group className={styles.customInput}>
              <Form.Control
                type="text"
                name="username"
                autoComplete="username"
                placeholder={t('username')}
                size="lg"
                onChange={handleChange}
                value={values.username}
                isInvalid={touched.username && errors.username}
              />
              {values.username && <ClearIcon onClear={() => setFieldValue('username', initialState.username)} />}
              <FieldValidator error={errors.username} />
            </Form.Group>
            <Form.Group className={styles.customInput}>
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  placeholder={t('password')}
                  size="lg"
                  aria-describedby="passwordPostpend"
                  onChange={handleChange}
                  value={values.password}
                  isInvalid={touched.password && errors.password}
                />
                <InputGroup.Append>
                  <InputGroup.Text className={styles.toTransparent} id="passwordPostpend">
                    {showPasswordIcon}
                  </InputGroup.Text>
                </InputGroup.Append>
                <FieldValidator error={errors.password} />
              </InputGroup>
            </Form.Group>
            <div className={styles.rememberMe}>
              <Checkbox
                checked={values.rememberMe}
                onChange={() => setFieldValue('rememberMe', !values.rememberMe)}
                toggle
                label={t('rememberMe')}
              />
            </div>
            <Button
              type="submit"
              fluid
              className={styles.loginBtn}
              color="blue"
              size="large"
            >
              {t('login')}
            </Button>
            <LoginFormFooter
              onCreateAccount={props.onCreateAccount}
              onForgotPassword={props.onForgotPassword}
            />
          </Form >
        )}
    </Formik>



  )
};

LoginForm.propTypes = {
  onCreateAccount: PropTypes.func.isRequired,
  onForgotPassword: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired
};

export default LoginForm;
