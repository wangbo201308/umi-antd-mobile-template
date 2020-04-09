import React from 'react';
import styles from './index.less';
import logo from 'images/logo.png';
import { InputItem, Button, Toast } from 'antd-mobile';

export default function login() {
  return (
    <div className={styles.login_wrapper}>
      <img src={logo} alt="logo" className={styles.logo}/>
      <InputItem type="number" maxLength={11} clear placeholder="请输入您的账号/手机号" className={styles.username_input} />
      <InputItem type="password" clear placeholder="请输入您的密码" />
      <p className={styles.forget_pwd}>忘记密码</p>
      <Button type="primary" style={{ marginLeft: '0.3rem' }}>登录</Button>
    </div>
  )
}
