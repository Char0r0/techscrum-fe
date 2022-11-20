import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { BsCalendar4Week } from 'react-icons/bs';
import { BiMessageSquareDetail } from 'react-icons/bi';
import Fade from 'react-reveal/Fade';
import styles from './ContactPage.module.scss';
import ContactForm from './ContactForm/ContactForm';
import Header from '../../components/Header/Header';
// https://www.privy.com/contact
export default function ContactPage() {
  return (
    <>
      <Header />
      <Fade>
        <div className={styles.contactHeader}>
          <h1>Contact Us</h1>
        </div>
        <div className={styles.contactPage}>
          <span className={styles.shape2Container}>
            <img
              src="https://themexriver.com/appilo-theme/seo-agency/wp-content/uploads/sites/56/2021/11/slider-shape-2.png"
              alt=""
            />
          </span>
          <div className={styles.circleContainer}>
            <img
              src="https://themexriver.com/appilo-theme/seo-agency/wp-content/uploads/sites/56/2021/11/slider-shape.png"
              alt=""
            />
          </div>
          <span className={styles.shape3Container}>
            <img
              src="https://themexriver.com/appilo-theme/seo-agency/wp-content/uploads/sites/56/2021/11/slider-shape-3.png"
              alt=""
            />
          </span>
          <div className={styles.container}>
            <div className={styles.content}>
              <p className={styles.title}>Contact Us</p>
              <h1>Contact Information</h1>
              <p>Fill up the form and our team will get back to you as soon as possible.</p>
              <ul>
                <li>
                  <div className={styles.icons}>
                    <AiOutlineEye />
                  </div>
                  <div className={styles.textContainer}>
                    <b>Phone</b>
                    <p className={styles.info1}>Mon-Fri from 9am to 5pm.</p>
                    <p className={styles.info}>
                      <p>Work in progress (WIP)</p>
                    </p>
                  </div>
                </li>
                <li>
                  <div className={styles.icons}>
                    <BsCalendar4Week />
                  </div>
                  <div className={styles.textContainer}>
                    <b>Chat to us</b>
                    <p className={styles.info1}>Mon-Fri from 9am to 5pm.</p>
                    <p className={styles.info}>info@techscrumapp.com</p>
                  </div>
                </li>
                <li>
                  <div className={styles.icons}>
                    <BiMessageSquareDetail />
                  </div>
                  <div className={styles.textContainer}>
                    <b>Office</b>
                    <p className={styles.info1}>Come say hi at our office.</p>
                    <p className={styles.info}>Australia, Melbourne</p>
                  </div>
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>
      </Fade>
    </>
  );
}
