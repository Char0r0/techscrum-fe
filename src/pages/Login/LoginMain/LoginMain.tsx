import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineVisibility, MdVisibility } from 'react-icons/md';
// import emailCheck from '../../../api/register/emailCheck';
import { login } from '../../../api/login/login';
import styles from './LoginMain.module.scss';
import Icon from '../../../assets/logo.svg';
import GoogleIcon from './google-logo.svg';
import MicrosoftIcon from './microsoft-logo.svg';
import AppleIcon from './apple-logo.svg';

export default function LoginMain() {
  const navigate = useNavigate();
  /* eslint-disable no-useless-escape */
  const illegalCharacter = /[%&]/;
  const [passwordInvisible, setPasswordInvisible] = useState(true);
  let emailRecorder = '';
  let passwordRecorder = '';

  const tip = (error: string) => {
    const tipLabel = document.getElementById('tip') as HTMLInputElement;
    tipLabel.textContent = error;
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      const resResult = await login({
        email: emailRecorder,
        password: passwordRecorder
      });
      const { token } = resResult;
      if (token !== undefined && token !== null) {
        localStorage.setItem('token', token);
        navigate(`/`);
      } else {
        tip('*Incorrect email or password, please try again.');
      }
    } catch (error) {
      tip('Something Go Wrong, Please contact staff!');
    }
  };

  const setEmail = (email: string) => {
    emailRecorder = email;
  };

  const setPassword = (password: string) => {
    if (!illegalCharacter.test(password)) {
      passwordRecorder = password;
      tip('');
    } else tip('Illegal Character Detected');
  };

  return (
    <div className={styles.registerMain}>
      <img src={Icon} alt="TechScrum Icon" />
      <form onSubmit={handleSubmit}>
        <h1>Your team&apos;s site</h1>
        <input
          className={styles.email}
          type="email"
          placeholder="Input Email Address"
          name="email"
          defaultValue={emailRecorder}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {passwordInvisible ? (
          <div className={styles.inputContainer}>
            <input
              className={styles.password}
              type="password"
              placeholder="Input Your Password"
              name="password"
              minLength={8}
              maxLength={16}
              defaultValue={passwordRecorder}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <MdOutlineVisibility
              onClick={() => {
                setPasswordInvisible(false);
              }}
            />
          </div>
        ) : (
          <div className={styles.inputContainer}>
            <input
              className={styles.password}
              type="text"
              placeholder="Input Your Password"
              name="password"
              minLength={8}
              maxLength={16}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <MdVisibility
              onClick={() => {
                setPasswordInvisible(true);
              }}
            />
          </div>
        )}
        <span id="tip" className={styles.tip} />
        <button type="submit" className={styles.btnMargin} onSubmit={handleSubmit}>
          Login
        </button>
        <p>or</p>
        <div className={styles.btnList}>
          <a href="/#">
            <img src={GoogleIcon} alt="" />
            <span>Keep Using Google</span>
          </a>
          <a href="/#">
            <img src={MicrosoftIcon} alt="" />
            <span>Keep Using Microsoft</span>
          </a>
          <a href="/#">
            <img src={AppleIcon} alt="" />
            <span>Keep Using Apple</span>
          </a>
        </div>
        <div className={styles.formFooter}>
          <Link to="/register">Register</Link>
          <span>•</span>
          <Link to="/reset-password">Forgot password</Link>
        </div>
      </form>
      <p className={styles.registerMainFooter}>
        <Link to="/privacy-policy">Privacy Policy</Link> &nbsp;and &nbsp;
        <Link to="/terms-of-service">Terms of Service</Link>
      </p>
    </div>
  );
}
