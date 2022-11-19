import React from 'react';
import { ITaskEntity } from '../../../../../types';
import styles from './Title.module.scss';

interface Props {
  taskInfo: ITaskEntity;
  focusEventHandler: () => void;
  isDisabled: boolean;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlurHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | undefined;
}

export default function Title({
  taskInfo,
  focusEventHandler,
  isDisabled,
  onChangeTitle,
  onBlurHandler,
  value
}: Props) {
  return (
    <div className={styles.cardTitle}>
      <label htmlFor="title">
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={taskInfo.title}
          onFocus={focusEventHandler}
          disabled={isDisabled}
          onChange={onChangeTitle}
          onBlur={onBlurHandler}
          value={value}
        />
      </label>
    </div>
  );
}
