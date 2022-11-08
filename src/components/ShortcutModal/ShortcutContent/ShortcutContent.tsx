import React from 'react';
import InputV2 from '../../FormV2/InputV2/InputV2';
import styles from './ShortcutContent.module.scss';

interface IShortCutContent {
  operation: string;
  setWebValue: (value: string) => void;
  setNameValue: (value: string) => void;
  webValue: string;
  value: string;
  isUrlValid: boolean;
}

export default function ShortcutContent({
  operation,
  setWebValue,
  setNameValue,
  value,
  webValue,
  isUrlValid
}: IShortCutContent) {
  return (
    <>
      <h1>{operation} shortcut</h1>
      <div className={styles.inputContent}>
        <InputV2
          label="Web Address"
          onValueChanged={(event) => {
            setWebValue(event.target.value);
          }}
          defaultValue={webValue}
          name="webValue"
          dataTestId="shortcut-title"
          placeHolder="e.g. https://www.techscrumapp.com"
        />
        {!!webValue && isUrlValid && (
          <p className={styles.colorRed} data-testid="invalid-url">
            Invalid URL
          </p>
        )}
      </div>
      <br />
      <div className={styles.inputContent}>
        <InputV2
          label="Name"
          onValueChanged={(event) => {
            setNameValue(event.target.value);
          }}
          defaultValue={value}
          name="name"
          dataTestId="shortcut-name"
          placeHolder="e.g. TechScrum website"
        />
      </div>
      <div className={styles.proTip}>
        <span>
          <strong> 😎Pro tip:</strong> Start your shortcut’s name with an emoji to customize its
          icon.
        </span>
      </div>
    </>
  );
}
