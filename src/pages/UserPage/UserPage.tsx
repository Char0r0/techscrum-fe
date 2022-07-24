/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../api/user/user';
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader';
import styles from './UserPage.module.scss';

export default function UserPage() {
  const { id = '' } = useParams();
  const [userInfo, setUserInfo] = useState<any>();

  useEffect(() => {
    getUser(id).then((res: any) => {
      setUserInfo(res.data);
    });
  }, []);

  if (!userInfo) {
    return <></>;
  }

  return (
    <>
      <ProjectHeader />
      <div className={styles.userPage}>
        <div className={styles.userBar}>
          <h2>About</h2>
        </div>
        <div className={styles.userForm}>
          <div className={styles.userInfo}>
            <form>
              <div className={styles.userInput}>
                <label htmlFor="Name">
                  Full Name
                  <br />
                  <input className={styles.proIcon} name="name" value={userInfo?.name} disabled />
                </label>
              </div>
              <div className={styles.userInput}>
                <label htmlFor="jobTitle">
                  Job Title
                  <br />
                  <input
                    className={styles.proIcon}
                    name="jobTitle"
                    value={userInfo?.jobTitle}
                    disabled
                  />
                </label>
              </div>
              <div className={styles.userInput}>
                <label htmlFor="location">
                  Location
                  <br />
                  <input
                    className={styles.proIcon}
                    name="location"
                    value={userInfo?.location}
                    disabled
                  />
                </label>
              </div>
              <div className={styles.userInput}>
                <label htmlFor="userName">
                  Username
                  <br />
                  <input
                    className={styles.proIcon}
                    name="userName"
                    value={userInfo?.userName}
                    disabled
                  />
                </label>
              </div>
            </form>
          </div>
          <div className={styles.userIcon}>
            <div className={styles.picBorder}>
              <h2>Photo</h2>
              <img src={userInfo?.avatarIcon} alt="name" className={styles.avatarIcon} />
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
