/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { getErrorMessage } from '../../../utils/formUtils';
import styles from '../FormV2.module.scss';
import defaultStyles from './DropdownV2.module.scss';

interface IDropdownV2 {
  onValueChanged: (e: any) => void;
  onValueBlur?: (e: any) => void;
  defaultValue?: string | null;
  name: string;
  options: any;
  label: string;
  required?: boolean;
  placeHolder?: string;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
}

export default function DropdownV2(props: IDropdownV2) {
  const {
    defaultValue,
    name,
    label,
    placeHolder,
    type = 'button',
    required,
    options,
    onValueChanged,
    onValueBlur = null,
    loading = false
  } = props;
  const defaultPlaceHolder = placeHolder || 'None';
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState<null | string>(null);
  const [isActive, setIsActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const finalValue = options.filter((item) => item.value === value)[0]?.label;

  const onChangeSelect = (val: string) => {
    const e = { target: { value: val, name } };
    const errorMessage = getErrorMessage(e, props);
    setError(errorMessage);
    setValue(e.target.value);
    onValueChanged(e);
    setShowMenu(false);
    setIsActive(false);
  };

  const onBlurValue = (e: any) => {
    if (onValueBlur) {
      onValueBlur(e);
    }
    const errorMessage = getErrorMessage(e, props);
    setError(errorMessage);
    setIsActive(false);
  };

  if (loading) {
    return <div className={styles.skeleton} />;
  }

  return (
    <div
      className={[
        'relative',
        styles.inputContainer,
        isActive ? styles.borderActive : '',
        error ? styles.borderRed : ''
      ].join(' ')}
    >
      <div
        onClick={() => {
          setShowMenu(!showMenu);
          setIsActive(true);
        }}
      >
        <label
          className={[
            styles.label,
            error ? styles.errorRed : '',
            isActive ? styles.active : ''
          ].join(' ')}
          htmlFor={name}
        >
          {label}
          {required ? <span className={styles.errorRed}>*</span> : ''}
        </label>
        <button
          type={type}
          className={[styles.input, !value ? styles.lightGrey : ''].join(' ')}
          onBlur={onBlurValue}
        >
          <p className={!finalValue ? defaultStyles.placeHolder : defaultStyles.val}>
            {!finalValue ? defaultPlaceHolder : finalValue}
          </p>
        </button>
        <RiArrowDropDownLine className={defaultStyles.dropDown} />

        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
      <div className="relative">
        {showMenu && (
          <div className={defaultStyles.dropDownList}>
            {options.length > 0 &&
              options
                .filter((item) => item.value !== value)
                .map((item) => {
                  return (
                    <button key={item.value} onClick={() => onChangeSelect(item.value)}>
                      {item.label}
                    </button>
                  );
                })}
          </div>
        )}
      </div>
    </div>
  );
}

DropdownV2.defaultProps = {
  required: false,
  placeHolder: '',
  type: 'button',
  onValueBlur: null,
  defaultValue: null,
  loading: false
};
