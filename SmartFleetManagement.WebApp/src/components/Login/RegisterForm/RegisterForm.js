import React from 'react';
import styles from './registerForm.module.scss';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Form, Button } from 'react-bootstrap';
import namespaces from '../../../internationalization/namespaces';
import FieldValidator from '../../../shared/ui/FieldValidator/FieldValidator';
import { stringFormat } from '../../../helpers/stringFormat';
import Select from '../../../shared/ui/Select/Select';
import DiscreteLink from '../../../shared/ui/DiscreteLink/DiscreteLink';

const initialState = {
  title: '',
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  confirm: ''
};

const RegisterForm = props => {
  const { t } = useTranslation(namespaces.register);

  const onSubmitHandler = values => {
    console.log(values);
  };

  const schema = yup.object({
    title: yup.string().required(t('validation::required')),
    email: yup.string().email(t('validation::email')).required(t('validation::required')),
    firstName: yup.string().required(t('validation::required')),
    lastName: yup.string().required(t('validation::required')),
    password: yup.string().min(8, stringFormat(t('validation::minLength'), 'Password', 8)).required(t('validation::required')),
    confirm: yup.string().oneOf([yup.ref('password'), null], t('validation::passwordNotMatch'))
  });

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
            <h1>{t('registerTitle')}</h1>
            <h5>{t('registerSubtitle')}</h5>
            <Form.Group className={styles.customInput}>
              <Select placeholder={t('selectPlaceholder')}
                name="title"
                items={["item1", "item2", "item3"]}
                onClick={result => setFieldValue('title', result.value)}
                value={values.title}
                onChange={handleChange}
                isInvalid={touched.title && errors.title}
              >
                <FieldValidator error={errors.title} />
              </Select>
            </Form.Group>
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
              <Form.Control
                type="text"
                name="firstName"
                autoComplete="firstName"
                placeholder={t('firstName')}
                size="md"
                onChange={handleChange}
                value={values.firstName}
                isInvalid={touched.firstName && errors.firstName}
              />
              <FieldValidator error={errors.firstName} />
            </Form.Group>
            <Form.Group className={styles.customInput}>
              <Form.Control
                type="text"
                name="lastName"
                autoComplete="lastName"
                placeholder={t('lastName')}
                size="md"
                onChange={handleChange}
                value={values.lastName}
                isInvalid={touched.lastName && errors.lastName}
              />
              <FieldValidator error={errors.lastName} />
            </Form.Group>
            <Form.Group className={styles.customInput}>
              <Form.Control
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder={t('password')}
                size="md"
                onChange={handleChange}
                value={values.password}
                isInvalid={touched.password && errors.password}
              />
              <FieldValidator error={errors.password} />
            </Form.Group>
            <Form.Group className={styles.customInput}>
              <Form.Control
                type="password"
                name="confirm"
                autoComplete="current-password"
                placeholder={t('confirm')}
                size="md"
                onChange={handleChange}
                value={values.confirm}
                isInvalid={touched.confirm && errors.confirm}
              />
              <FieldValidator error={errors.confirm} />
            </Form.Group>
            <Button type="submit" variant="dark">{t('submit')}</Button>
            <DiscreteLink onClick={props.onViewChange} text={t('forgotPassword::signIn')} />
          </Form>
        )}
    </Formik>
  );
};

export default RegisterForm;
