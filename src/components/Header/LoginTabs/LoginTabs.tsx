import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginTabs.module.scss';
import { UserContext } from '../../../context/UserInfoProvider';

interface Props {
  show: boolean;
}

export default function LoginTabs({ show }: Props) {
  const userInfo = useContext(UserContext);
  return (
    <div className={`${styles.functionsLoginTabs} ${show ? styles.functionLoginTabsActive : ''}`}>
      {Object.keys(userInfo).length === 0 ? (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        <>
          <Link to="/#">Hi {userInfo.name}</Link>
          <Link to="/#">Logout</Link>
        </>
      )}
    </div>
  );
}
