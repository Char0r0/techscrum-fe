import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './NavMain.module.scss';

export default function NavMain() {
  return (
    <div className={style.container}>
      <div className={style.containerTop}>
        <div className={style.containerItem}>
          <div className={style.containerItemTitle}>
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
                <path
                  d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
            </span>
            <h3>PLANNING</h3>
          </div>

          <div className={style.items}>
            <NavLink to="/nav">
              <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
                <path
                  d="M6 2h10a3 3 0 010 6H6a3 3 0 110-6zm0 2a1 1 0 100 2h10a1 1 0 000-2H6zm4 5h8a3 3 0 010 6h-8a3 3 0 010-6zm0 2a1 1 0 000 2h8a1 1 0 000-2h-8zm-4 5h6a3 3 0 010 6H6a3 3 0 010-6zm0 2a1 1 0 000 2h6a1 1 0 000-2H6z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
              <p>Roadmap</p>
            </NavLink>

            <NavLink to="/nav">
              <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
                <g fill="currentColor">
                  <path d="M5 19.002C5 19 17 19 17 19v-2.002C17 17 5 17 5 17v2.002zm-2-2.004C3 15.894 3.895 15 4.994 15h12.012c1.101 0 1.994.898 1.994 1.998v2.004A1.997 1.997 0 0117.006 21H4.994A1.998 1.998 0 013 19.002v-2.004z" />
                  <path d="M5 15h12v-2H5v2zm-2-4h16v6H3v-6z" />
                  <path d="M7 11.002C7 11 19 11 19 11V8.998C19 9 7 9 7 9v2.002zM5 8.998C5 7.894 5.895 7 6.994 7h12.012C20.107 7 21 7.898 21 8.998v2.004A1.997 1.997 0 0119.006 13H6.994A1.998 1.998 0 015 11.002V8.998z" />
                  <path d="M5 5v2h12V5H5zm-2-.002C3 3.894 3.895 3 4.994 3h12.012C18.107 3 19 3.898 19 4.998V9H3V4.998z" />
                </g>
              </svg>
              <p>Backlog</p>
            </NavLink>
            <NavLink to="/board">
              <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
                <g fill="currentColor">
                  <path d="M4 18h16.008C20 18 20 6 20 6H3.992C4 6 4 18 4 18zM2 5.994C2 4.893 2.898 4 3.99 4h16.02C21.108 4 22 4.895 22 5.994v12.012A1.997 1.997 0 0120.01 20H3.99A1.994 1.994 0 012 18.006V5.994z" />
                  <path d="M8 6v12h2V6zm6 0v12h2V6z" />
                </g>
              </svg>
              <p>Board</p>
            </NavLink>
          </div>
        </div>

        <div className={style.containerItem}>
          <div className={style.containerItemTitle}>
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
                <path
                  d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
            </span>
            <h3>DEVELOPMENT</h3>
          </div>
          <div className={style.items}>
            <NavLink to="/nav">
              <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
                <path
                  d="M14.155 4.055a1 1 0 00-1.271.62l-4.83 14.046a1 1 0 001.891.65l4.83-14.045a1 1 0 00-.62-1.271m-6.138 8.21l-2.58-2.501L8.236 7.05a.999.999 0 10-1.392-1.436l-3.54 3.432a1 1 0 000 1.436l3.32 3.219a1 1 0 101.393-1.436m12.219 1.568l-3.32-3.22a.999.999 0 10-1.393 1.437l2.58 2.5-2.799 2.715a.999.999 0 101.392 1.436l3.54-3.432a1 1 0 000-1.436"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
              <p>Code</p>
            </NavLink>

            <NavLink to="/nav">
              <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
                <g fill="currentColor" fillRule="evenodd">
                  <path
                    d="M6 12h8v-2H6v2zM4 8.99C4 8.445 4.456 8 5.002 8h9.996C15.55 8 16 8.451 16 8.99V14H4V8.99z"
                    fillRule="nonzero"
                  />
                  <path d="M6 7.005C6 5.898 6.898 5 7.998 5h2.004C11.106 5 12 5.894 12 7.005V10H6V7.005zm4 0V7H7.999c.005 0 .002.003.002.005V8h2v-.995z" />
                  <path
                    d="M4.5 17h13.994l1.002-3H4.14l.36 3zm-2.495-4.012A.862.862 0 012.883 12h18.393c.55 0 .857.417.681.944l-1.707 5.112c-.174.521-.758.944-1.315.944H3.725a1.149 1.149 0 01-1.118-.988l-.602-5.024z"
                    fillRule="nonzero"
                  />
                </g>
              </svg>
              <p>Releases</p>
            </NavLink>
          </div>
        </div>

        <div className={style.containerItem}>
          <div className={style.items}>
            <div className={style.containerItemTitle}>
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
                  <path
                    d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
              <h3>OPERATIONS</h3>
            </div>
            <NavLink to="/nav">
              <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
                <g fill="currentColor" fillRule="evenodd">
                  <path d="M11.208 9.32L9.29 11.253a1 1 0 000 1.409.982.982 0 001.397 0l1.29-1.301 1.336 1.347a.982.982 0 001.397.001 1.002 1.002 0 00.001-1.408l-1.965-1.98a1.08 1.08 0 00-1.538-.001z" />
                  <path d="M11 10.007l.001 9.986c0 .557.448 1.008 1 1.007.553 0 1-.45 1-1.007L13 10.006C13 9.451 12.552 9 12 9s-1.001.451-1 1.007z" />
                  <path d="M7.938 5.481a4.8 4.8 0 00-.777-.063C4.356 5.419 2 7.62 2 10.499 2 13.408 4.385 16 7.1 16h2.881v-1.993H7.1c-1.657 0-3.115-1.663-3.115-3.508 0-1.778 1.469-3.087 3.104-3.087h.012c.389 0 .686.051.97.15l.17.063c.605.248.875-.246.875-.246l.15-.267c.73-1.347 2.201-2.096 3.716-2.119a4.14 4.14 0 014.069 3.644l.046.34s.071.525.665.525c.013 0 .012.005.023.005h.254c1.136 0 1.976.959 1.976 2.158 0 1.207-.987 2.342-2.07 2.342h-3.964V16h3.964C20.105 16 22 13.955 22 11.665c0-1.999-1.312-3.663-3.138-4.074-.707-2.707-3.053-4.552-5.886-4.591-1.975.021-3.901.901-5.038 2.481z" />
                </g>
              </svg>
              <p>Deployments</p>
            </NavLink>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className={style.containerBottom}>
        <NavLink to="/nav">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
          >
            <defs>
              <linearGradient x1="100%" x2="45.339%" y1="29.23%" y2="75.038%" id="uid11">
                <stop stopColor="inherit" stopOpacity="0.4" offset="0%" />
                <stop stopColor="inherit" offset="100%" />
              </linearGradient>
            </defs>
            <g stroke="none" strokeWidth="1" fillRule="nonzero">
              <path
                d="M4.78580435,5 C4.55423538,4.99701333 4.33319771,5.09657765 4.18198458,5.27198488 C4.03077145,5.44739211 3.96486141,5.68068714 4.00193478,5.9092887 L7.32946109,26.1096074 C7.3703589,26.355373 7.49665951,26.578828 7.68612174,26.7406224 C7.87680866,26.9055104 8.11992598,26.9972003 8.37200761,26.9992993 L14.5488998,19.5995707 L13.6827239,19.5995707 L12.3227102,12.3958093 L27.3886833,12.3958093 L28.4469072,5.91712739 C28.4862006,5.68935393 28.4229655,5.45584955 28.2741046,5.27903 C28.1252437,5.10221045 27.9059335,5.00010264 27.6747957,5 L4.78580435,5 Z"
                fill="currentColor"
              />
              <path
                fill="url(#uid11)"
                d="M27.3886833,12.3958093 L20.0320674,12.3958093 L18.7974728,19.5995707 L13.7023207,19.5995707 L7.68612174,26.7445417 C7.87680866,26.9094297 8.11992598,27.0011197 8.37200761,27.0032187 L24.3394307,27.0032187 C24.727754,27.0082167 25.0611955,26.7281258 25.1233002,26.3447683 L27.3886833,12.3958093 Z"
              />
            </g>
          </svg>
          <span>fe.techscrum</span>
        </NavLink>
        <br />
        <NavLink to="/nav">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
          >
            <defs>
              <linearGradient x1="100%" x2="45.339%" y1="29.23%" y2="75.038%" id="uid11">
                <stop stopColor="inherit" stopOpacity="0.4" offset="0%" />
                <stop stopColor="inherit" offset="100%" />
              </linearGradient>
            </defs>
            <g stroke="none" strokeWidth="1" fillRule="nonzero">
              <path
                d="M4.78580435,5 C4.55423538,4.99701333 4.33319771,5.09657765 4.18198458,5.27198488 C4.03077145,5.44739211 3.96486141,5.68068714 4.00193478,5.9092887 L7.32946109,26.1096074 C7.3703589,26.355373 7.49665951,26.578828 7.68612174,26.7406224 C7.87680866,26.9055104 8.11992598,26.9972003 8.37200761,26.9992993 L14.5488998,19.5995707 L13.6827239,19.5995707 L12.3227102,12.3958093 L27.3886833,12.3958093 L28.4469072,5.91712739 C28.4862006,5.68935393 28.4229655,5.45584955 28.2741046,5.27903 C28.1252437,5.10221045 27.9059335,5.00010264 27.6747957,5 L4.78580435,5 Z"
                fill="currentColor"
              />
              <path
                fill="url(#uid11)"
                d="M27.3886833,12.3958093 L20.0320674,12.3958093 L18.7974728,19.5995707 L13.7023207,19.5995707 L7.68612174,26.7445417 C7.87680866,26.9094297 8.11992598,27.0011197 8.37200761,27.0032187 L24.3394307,27.0032187 C24.727754,27.0082167 25.0611955,26.7281258 25.1233002,26.3447683 L27.3886833,12.3958093 Z"
              />
            </g>
          </svg>
          <span>be.techscrum</span>
        </NavLink>
        <br />
        <NavLink to="/nav">
          <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
            <g fill="currentColor">
              <path d="M19.005 19c-.003 0-.005.002-.005.002l.005-.002zM5 19.006c0-.004-.002-.006-.005-.006H5v.006zM5 4.994V5v-.006zM19 19v-6h2v6.002A1.996 1.996 0 0119.005 21H4.995A1.996 1.996 0 013 19.006V4.994C3 3.893 3.896 3 4.997 3H11v2H5v14h14zM5 4.994V5v-.006zm0 14.012c0-.004-.002-.006-.005-.006H5v.006zM11 5H5v14h14v-6h2v6.002A1.996 1.996 0 0119.005 21H4.995A1.996 1.996 0 013 19.006V4.994C3 3.893 3.896 3 4.997 3H11v2zm8 0v3a1 1 0 002 0V4a1 1 0 00-1-1h-4a1 1 0 000 2h3z" />
              <path d="M12.707 12.707l8-8a1 1 0 10-1.414-1.414l-8 8a1 1 0 001.414 1.414z" />
            </g>
          </svg>
          <span>drive.google.com</span>
        </NavLink>
        <br />
        <NavLink to="/settings">
          <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
            <g fill="currentColor">
              <path d="M19.005 19c-.003 0-.005.002-.005.002l.005-.002zM5 19.006c0-.004-.002-.006-.005-.006H5v.006zM5 4.994V5v-.006zM19 19v-6h2v6.002A1.996 1.996 0 0119.005 21H4.995A1.996 1.996 0 013 19.006V4.994C3 3.893 3.896 3 4.997 3H11v2H5v14h14zM5 4.994V5v-.006zm0 14.012c0-.004-.002-.006-.005-.006H5v.006zM11 5H5v14h14v-6h2v6.002A1.996 1.996 0 0119.005 21H4.995A1.996 1.996 0 013 19.006V4.994C3 3.893 3.896 3 4.997 3H11v2zm8 0v3a1 1 0 002 0V4a1 1 0 00-1-1h-4a1 1 0 000 2h3z" />
              <path d="M12.707 12.707l8-8a1 1 0 10-1.414-1.414l-8 8a1 1 0 001.414 1.414z" />
            </g>
          </svg>
          <span>Project Settings</span>
        </NavLink>
      </div>
    </div>
  );
}
