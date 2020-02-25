import React from 'react';
import styles from './login.module.scss';
import { Row, Col } from 'react-bootstrap';
import LoginForm from './LoginForm/LoginForm';
import CarDark from '../../assets/car-dark.PNG';

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <Row className="d-flex align-content-center flex-wrap">
          <Col className={`d-flex ${styles.colImg}`}>
            <div className={styles.image}>
              <img src={CarDark} alt="car" />
            </div>
          </Col>
          <Col className="d-flex justify-content-center">
            <LoginForm />
          </Col>
        </Row>
      </div>
    </div>
  )
};

export default Login;
