/* eslint-disable react/no-array-index-key */
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './CreateNewCard.module.scss';
import { createNewTask } from '../../api/task/task';
import { ICardData, IProject, IProjectData } from '../../types';
import UserSelect from '../Form/Select/UserSelect/UserSelect';
import { upload } from '../../api/upload/upload';
import Attach from '../BoardCard/CardLeftContent/components/Attach/Attach';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import { TaskTypesContext } from '../../context/TaskTypeProvider';
import { ProjectContext } from '../../context/ProjectProvider';

interface Props {
  fetchNewCard: (newCard: ICardData) => void;
  updateIsCreateNewCard: () => void;
}

function CreateNewCard({ fetchNewCard, updateIsCreateNewCard }: Props) {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [assigneeId, setAssigneeId] = useState<any>(null);
  const [hasError, setError] = useState(false);
  const [photoData, setPhotoData] = useState<any>([]);
  const [taskTypeId, setTaskTypeId] = useState<string>();
  const { boardId = '', projectId = '' } = useParams();
  const taskType = useContext(TaskTypesContext);
  const projectList = useContext<IProject[]>(ProjectContext);
  const currentProject: IProjectData[] = projectList.filter(
    (project: IProjectData) => project.id === projectId
  );

  useEffect(() => {
    if (!taskType) {
      return;
    }
    setTaskTypeId(taskType[0].id);
  }, [taskType]);

  const data = useState<ICardData>({
    dueAt: new Date(),
    title: ''
  });

  const onChangeAssigneeId = (e: any) => {
    setAssigneeId(e.target.value);
  };

  const onChangeTaskType = (e: any) => {
    setTaskTypeId(e.target.value);
  };

  const changeDescriptionHandler = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const changeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const uploadSuccess = (newPhotoData: any) => {
    const updatePhotoData = [...photoData, newPhotoData[0].location];
    setPhotoData(updatePhotoData);
  };

  const uploadFile = (e: any) => {
    const uploadData = new FormData();
    uploadData.append('photos', e.target.files[0]);
    upload(uploadData).then((res: any) => {
      uploadSuccess(res.data);
    });
  };

  const onSave = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newCard = {
      ...data[0],
      description,
      title,
      boardId,
      projectId,
      tag: [],
      typeId: taskTypeId,
      assignId: assigneeId?.id,
      attachmentUrls: photoData
    };

    createNewTask(newCard)
      .then((res) => {
        if (res.status === 201) {
          setError(false);
          fetchNewCard({ ...res.data, statusId: res.data.status });
          return;
        }
        setError(true);
      })
      .catch(() => {
        setError(true);
      });
  };

  const removeAttachment = (url: string) => {
    const updatePhotoData = photoData.filter((photoUrl: string) => {
      return photoUrl !== url;
    });
    setPhotoData(updatePhotoData);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardTitle}>
        <h2 className={styles.titleContent} data-testid="board-create-card-btn">
          Create card
        </h2>
        <button type="button" className={styles.titleButton}>
          ...
        </button>
      </div>
      <form onSubmit={onSave}>
        <div className={styles.cardContent}>
          <p className={styles.cardStar}>Project</p>
          <input className={styles.cardInput} disabled defaultValue={currentProject[0].name} />
          <p className={styles.cardStar}>Card type</p>
          <select className={styles.cardSelect} onChange={onChangeTaskType}>
            {taskType.map((item: any) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <p className={styles.cardStar}>Summary</p>
          <input
            className={styles.cardInput}
            type="text"
            value={title}
            onChange={changeTitleHandler}
            data-testid="summary"
            required
          />
          <p className={styles.cardLabel}>Attachment</p>
          <Attach onChangeAttachment={uploadFile} />
          <PhotoGallery photoData={photoData} removeAttachment={removeAttachment} />
          <p className={styles.cardLabel}>Description</p>
          <textarea
            className={styles.cardTextarea}
            value={description}
            onChange={changeDescriptionHandler}
          />
          <p className={styles.cardLabel}>Assignee</p>
          <UserSelect onChange={onChangeAssigneeId} value={assigneeId} allowEdit />
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
          <button type="submit" className={styles.createButton} data-testid="create-issue">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateNewCard;
