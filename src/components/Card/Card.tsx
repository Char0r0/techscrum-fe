import React, { useState } from 'react';
import styles from './Card.module.scss';
import { createNewTask } from '../../api/task/task';

interface Props {
  updateIsCreateNewCard: () => void;
}

function Card({ updateIsCreateNewCard }: Props) {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [hasError, setError] = useState(false);

  const data = useState<any>({
    title: '',
    description: '',
    cardType: '',
    assign: '629c17f49c0a43d2a090515e',
    label: '',
    sprint: '',
    storyPointEstimate: '',
    pullRequestNumber: 0,
    reporter: { userId: '', userName: '', userIcon: '' },
    tag: 'abc',
    board_id: '62b0b2c4814630be771dd8b8',
    project_id: '62bad502cc89e64e8d695ef2'
  });

  const changeDescriptionHandler = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const changeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onSave = (e: React.SyntheticEvent) => {
    e.preventDefault();
    updateIsCreateNewCard();
    const newCard = { ...data, description, title };
    createNewTask(newCard)
      .then((res: any) => {
        if (res.status === '201') {
          return;
        }
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardTitle}>
        <h2 className={styles.titleContent}>Create card</h2>
        <button type="button" className={styles.titleButton}>
          ...
        </button>
      </div>
      <form>
        <div className={styles.cardContent}>
          <p className={styles.cardStar}>Project</p>
          <input className={styles.cardInput} disabled defaultValue="TECHSCRUM(TEC)" />
          <p className={styles.cardStar}>Card type</p>
          <select className={styles.cardSelect}>
            <option value="story">Story</option>
            <option value="bug">Bug</option>
          </select>
          <p className={styles.cardStar}>Summary</p>
          <input
            className={styles.cardInput}
            type="text"
            value={title}
            onChange={changeTitleHandler}
          />
          <p className={styles.cardLabel}>Attachment</p>
          <input
            className={styles.cardInput}
            type="file multiple"
            id="fileInput"
            placeholder="Drop files to attach or browse"
          />
          <p className={styles.cardLabel}>Description</p>
          <textarea
            className={styles.cardTextarea}
            value={description}
            onChange={changeDescriptionHandler}
          />
          <p className={styles.cardLabel}>Assignee</p>
          <input className={styles.cardAssignee} placeholder="Automatic" />
          <p className={styles.cardLabel} style={{ display: 'none' }}>
            Priority
          </p>
          <select className={styles.cardSelect} style={{ display: 'none' }}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <p className={styles.cardLabel} style={{ display: 'none' }}>
            Labels
          </p>
          <select
            className={styles.cardSelect}
            placeholder="select Label"
            style={{ display: 'none' }}
          >
            <option value="backend">backend</option>
            <option value="frontend">frontend</option>
          </select>
        </div>
        {hasError && <p className={styles.error}>Error</p>}
        <div className={styles.cardButton}>
          <button
            type="button"
            className={styles.cancelButton}
            name="close"
            onClick={updateIsCreateNewCard}
          >
            Cancel
          </button>
          <button type="submit" className={styles.createButton} onClick={onSave}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default Card;
