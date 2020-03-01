import React, { useState } from 'react';
import styles from './loginForm.module.scss';
import { useTranslation } from 'react-i18next';
import namespaces from '../../../internationalization/namespaces';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { Checkbox } from 'semantic-ui-react';
import LoginFormFooter from './LoginFormFooter/LoginFormFooter';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '../../../shared/ui/Tooltip/Tooltip';
import * as yup from 'yup';
import { Formik } from 'formik';
import FieldValidator from '../../../shared/ui/FieldValidator/FieldValidator';

const initialState = {
  email: '',
  password: '',
  rememberMe: false
};

const LoginForm = props => {
  const { t } = useTranslation(namespaces.login);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHandler = values => {
    console.log(values);
  };

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
    email: yup.string().email(t('validation::email')).required(t('validation::required')),
    password: yup.string().required(t('validation::required'))
  });

  return (
    <Formik
      validationSchema={schema}
      initialValues={initialState}
      onSubmit={onSubmitHandler}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
        setFieldValue
      }) => (
          <Form noValidate onSubmit={handleSubmit} className={styles.form}>
            <h1>{t('title')}</h1>
            <h5>{t('subtitle')}</h5>
            <Form.Group className={styles.customInput}>
              <Form.Control
                type="email"
                name="email"
                autoComplete="email"
                placeholder={t('email')}
                size="md"
                onChange={handleChange}
                value={values.email}
                isInvalid={touched.email && errors.email}
              />
              <FieldValidator error={errors.email} />
            </Form.Group>
            <Form.Group className={styles.customInput}>
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  placeholder={t('password')}
                  size="md"
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
            <Button type="submit" variant="dark">{t('login')}</Button>
            <LoginFormFooter
              onCreateAccount={props.onRegister}
              onForgotPassword={props.onViewChange}
            />
          </Form >
        )}
    </Formik>
  )
};

LoginForm.propTypes = {
  onViewChange: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired
};

export default LoginForm;
