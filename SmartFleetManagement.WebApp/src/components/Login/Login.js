import React, { useState, useEffect } from 'react';
import styles from './login.module.scss';
import { Row, Col, Container } from 'react-bootstrap';
import LoginForm from './LoginForm/LoginForm';
import LinkLanguageSelector from '../../shared/ui/LanguageSelector/LinkLanguageSelector';
import ForgotPasswordForm from './ForgotPasswordForm/ForgotPasswordForm';
import RegisterForm from './RegisterForm/RegisterForm';
import { withRouter } from 'react-router-dom';
import { routing } from '../../helpers/routing';

const initialState = {
  forgotPassword: false,
  register: false,
  login: true
};

const Login = props => {
  const [formState, setFormState] = useState(initialState);

  const updateState = object => {
    setFormState({
      ...formState,
      ...object
    });
  };

  useEffect(() => {
    preferredAction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const preferredAction = () => {
    const action = routing.getValueFromQueryString('action', props.location);

    if (action) {
      setFormState({
        [action]: true
      });
    }
  }

  const onForgotPasswordForm = () => {
    updateState({
      forgotPassword: true,
      login: false
    });
  };

  const onRegisterAccountForm = () => {
    updateState({
      register: true,
      login: false
    });
  }

  const onShowLoginForm = () => {
    updateState({
      forgotPassword: false,
      register: false,
      login: true
    });
  };

  const Form = () => (
    <>
      {formState.login &&
        <LoginForm
          onViewChange={onForgotPasswordForm}
          onRegister={onRegisterAccountForm}
        />
      }

      {formState.forgotPassword &&
        <ForgotPasswordForm
          onViewChange={onShowLoginForm}
        />
      }

      {formState.register &&
        <RegisterForm
          onViewChange={onShowLoginForm}
        />
      }
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

export default withRouter(Login);
