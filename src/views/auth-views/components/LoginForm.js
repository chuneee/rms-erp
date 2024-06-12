// src/auth-views/LoginForm.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input, Alert } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { signIn, showLoading, hideAuthMessage } from 'store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";


export const LoginForm = (props) => {
  const navigate = useNavigate();

  const { 
    hideAuthMessage,
    showLoading,
    signIn, 
    token, 
    loading,
    redirect,
    showMessage,
    message,
    allowRedirect = true
  } = props;

  const initialCredential = {
    email: '',
    password: ''
  };

  const onLogin = (values) => {
    showLoading();
    signIn(values).then(() => {
      if (token !== null && allowRedirect) {
        navigate(redirect);
      }
    }).catch((error) => {
      console.error('Login error:', error);
    });
  };

  useEffect(() => {
    if (token !== null && allowRedirect) {
      navigate(redirect);
    }
    if (showMessage) {
      const timer = setTimeout(() => hideAuthMessage(), 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [token, allowRedirect, navigate, redirect, showMessage, hideAuthMessage]);

  return (
    <div className="login-form-container">
      <motion.div 
        initial={{ opacity: 0, marginBottom: 0 }} 
        animate={{ 
          opacity: showMessage ? 1 : 0,
          marginBottom: showMessage ? 20 : 0 
        }}
      > 
        <Alert type="error" showIcon message={message}></Alert>
      </motion.div>
      <Form 
        layout="vertical" 
        name="login-form" 
        initialValues={initialCredential}
        onFinish={onLogin}
      >
        <Form.Item 
          name="email" 
          label="Email" 
          rules={[
            { 
              required: true,
              message: 'Please input your email',
            },
            { 
              type: 'email',
              message: 'Please enter a valid email!'
            }
          ]}
        >
          <Input prefix={<MailOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item 
          name="password" 
          label="Password"
          rules={[
            { 
              required: true,
              message: 'Please input your password',
            }
          ]}
        >
          <Input.Password prefix={<LockOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

LoginForm.propTypes = {
  allowRedirect: PropTypes.bool,
};

LoginForm.defaultProps = {
  allowRedirect: true,
};

const mapStateToProps = ({ auth }) => {
  const { loading, message, showMessage, token, redirect } = auth;
  return { loading, message, showMessage, token, redirect };
};

const mapDispatchToProps = {
  signIn,
  showLoading,
  hideAuthMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
