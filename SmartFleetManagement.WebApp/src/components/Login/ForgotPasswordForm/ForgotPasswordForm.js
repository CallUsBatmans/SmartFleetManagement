import React from 'react';
import styles from './forgotPasswordForm.module.scss';
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import namespaces from '../../../internationalization/namespaces';
import DiscreteLink from '../../../shared/ui/DiscreteLink/DiscreteLink';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { Formik } from 'formik';
import FieldValidator from '../../../shared/ui/FieldValidator/FieldValidator';
import ClearIcon from '../../../shared/ui/ClearIcon/ClearIcon';

const initialState = {
  email: ''
};

const ForgotPasswordForm = props => {
  const { t } = useTranslation(namespaces.forgotPassword);

  const schema = yup.object({
    email: yup
      .string()
      .email(t('validation::email'))
      .required(t('validation::required'))
  });

  const onSubmitHandler = values => {
    const { email } = values;

    console.log(email);
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={onSubmitHandler}
      initialValues={initialState}
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
                value={values.email}
                onChange={handleChange}
                type="email"
                name="email"
                autoComplete="email"
                placeholder={t('email')}
                size="md"
                isInvalid={touched.email && errors.email}
              />
              {values.email && <ClearIcon onClear={() => setFieldValue('email', initialState.email)} />}
              <FieldValidator error={errors.email} />
            </Form.Group>
            <Button type="submit" variant="success">{t("resetPassword")}</Button>
            <DiscreteLink onClick={props.onViewChange} text={t('signIn')} />
          </Form>
        )}
    </Formik>
  );
};

ForgotPasswordForm.propTypes = {
  onViewChange: PropTypes.func.isRequired
};

export default ForgotPasswordForm;
