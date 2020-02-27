import React from 'react';
import styles from './forgotPasswordForm.module.scss';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import namespaces from '../../../internationalization/namespaces';
import { Button } from 'semantic-ui-react';
import DiscreteLink from '../../../shared/ui/DiscreteLink/DiscreteLink';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { Formik } from 'formik';
import FieldValidator from '../../../shared/ui/FieldValidator/FieldValidator';
import ClearIcon from '../../../shared/ui/ClearIcon/ClearIcon';

const initialState = {
  username: ''
};

const ForgotPasswordForm = props => {
  const { t } = useTranslation(namespaces.login);

  const schema = yup.object({
    username: yup
      .string()
      .email(t('validation::email'))
      .required(t('validation::required'))
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={props.onReset}
      initialValues={initialState}
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
            <h1>{t('forgotPasswordTitle')}</h1>
            <h5>{t('forgotPasswordSubtitle')}</h5>
            <Form.Group className={styles.customInput}>
              <Form.Control
                value={values.username}
                onChange={handleChange}
                type="text"
                name="username"
                autoComplete="username"
                placeholder={t('usernameOrEmail')}
                size="lg"
                isInvalid={touched.username && errors.username}
              />
              {values.username && <ClearIcon onClear={() => setFieldValue('username', initialState.username)} />}
              <FieldValidator error={errors.username} />
            </Form.Group>
            <Button
              type="submit"
              fluid
              className={styles.resetBtn}
              color="green"
              size="large"
            >
              {t("resetPassword")}
            </Button>
            <DiscreteLink onClick={props.onLoginAccount} text={t('signIn')} />
          </Form>
        )}
    </Formik>
  );
};

ForgotPasswordForm.propTypes = {
  onLoginAccount: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
};

export default ForgotPasswordForm;
