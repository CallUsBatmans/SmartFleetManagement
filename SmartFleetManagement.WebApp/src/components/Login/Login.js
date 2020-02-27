import React, { useState } from 'react';
import styles from './login.module.scss';
import { Row, Col, Container } from 'react-bootstrap';
import LoginForm from './LoginForm/LoginForm';
import LinkLanguageSelector from '../../shared/ui/LanguageSelector/LinkLanguageSelector';
import ForgotPasswordForm from './ForgotPasswordForm/ForgotPasswordForm';

const initialState = {
  forgotPassword: false,
  createAccount: false,
  login: true
};

const Login = () => {
  const [formState, setFormState] = useState(initialState);
  const updateState = object => {
    setFormState({
      ...formState,
      ...object
    });
  };

  const onCreateAccountHandler = () => {

  };

  const onForgotPasswordHandler = () => {
    updateState({
      forgotPassword: true,
      login: false
    });
  };

  const onLoginAccountHandler = () => {
    updateState({
      forgotPassword: false,
      login: true
    });
  };

  const onLoginHanlder = values => {
    console.log(values);
  };

  const onResetHandler = values => {
    console.log(values);
  };

  const Form = () => (
    <>
      {formState.login &&
        <LoginForm
          onCreateAccount={onCreateAccountHandler}
          onForgotPassword={onForgotPasswordHandler}
          onLogin={onLoginHanlder}
        />
      }

      {formState.forgotPassword &&
        <ForgotPasswordForm
          onLoginAccount={onLoginAccountHandler}
          onReset={onResetHandler}
        />
      }

      {formState.createAccount && <div></div>}
    </>
  );

  return (
    <Container fluid className={styles.container}>
      <div className={styles.loginBox}>
        <Row className="d-flex align-content-center flex-wrap">
          <Col className={`d-flex ${styles.colImg}`}>
            <div className={styles.image}>
            </div>
          </Col>
          <Col>
            <div className={styles.languageSelector}>
              <LinkLanguageSelector />
            </div>
            <div className={styles.loginForm}>
              <Form />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
};

export default Login;
