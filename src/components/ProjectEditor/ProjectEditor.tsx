/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import ChangeIcon from './ChangeIcon/ChangeIcon';
import styles from './ProjectEditor.module.scss';
import { IOnChangeProjectLead, IProjectEditor } from '../../types';
import { UserContext } from '../../context/UserInfoProvider';
import UsersFieldsV2 from '../../lib/FieldsV2/UsersFieldsV2/UsersFieldsV2';
import ButtonV2 from '../../lib/FormV2/ButtonV2/ButtonV2';
import InputV2 from '../../lib/FormV2/InputV2/InputV2';
import BtnContainer from '../../lib/Grid/BtnContainer/BtnContainer';
import Row from '../../lib/Grid/Row/Row';

interface ProjectEditorProps {
  showCancelBtn?: boolean;
  projectData?: IProjectEditor;
  onClickSave: (data: IProjectEditor) => void;
  onClickCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  hasError?: boolean;
  loading?: boolean;
}

function ProjectEditor(props: ProjectEditorProps) {
  const [data, setData] = useState<IProjectEditor>({
    name: '',
    key: '',
    projectLeadId: 1,
    assigneeId: 1,
    iconUrl: ''
  });
  const userInfo = useContext(UserContext);

  useEffect(() => {
    if (!userInfo) {
      return;
    }
    setData({ ...data, projectLeadId: userInfo });
  }, [userInfo.id]);

  const {
    showCancelBtn = false,
    projectData,
    onClickSave,
    hasError,
    onClickCancel = () => {},
    loading
  } = props;
  const onChange = (e: IOnChangeProjectLead) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (!projectData) {
      return;
    }
    setData(projectData);
  }, [projectData]);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updateData = {
      [e.target.name]: e.target.value,
      key: e.target.value.substring(0, 3).toUpperCase()
    };

    setData({ ...data, ...updateData });
  };

  const onSave = () => {
    const apiData = { ...data, userId: userInfo.id };
    onClickSave(apiData);
  };

  const uploadSuccess = (photoData: any) => {
    const updateData = { ...data };
    updateData.iconUrl = photoData[0].location;
    setData(updateData);
  };

  return (
    <div className={styles.editSection}>
      <div className={styles.editContainer}>
        <form>
          <ChangeIcon uploadSuccess={uploadSuccess} value={data.iconUrl} />
          <Row defaultMargin>
            <UsersFieldsV2
              onChange={onChange}
              defaultValue={data.projectLeadId}
              label="Project Lead"
              name="projectLeadId"
            />
          </Row>
          <Row defaultMargin>
            <InputV2
              name="name"
              label="Name"
              onValueChanged={onChangeName}
              value={data.name}
              dataTestId="name"
            />
          </Row>
          <Row defaultMargin>
            <InputV2
              name="key"
              label="Key"
              onValueChanged={() => {}}
              value={data.key}
              dataTestId="key"
            />
          </Row>
          {hasError && (
            <p className={styles.error} data-testid="projectError">
              Error
            </p>
          )}
          <Row>
            <BtnContainer>
              <ButtonV2 text="Save" onClick={onSave} dataTestId="save" fill loading={loading} />
              {showCancelBtn && (
                <ButtonV2
                  text="Cancel"
                  onClick={onClickCancel}
                  dataTestId="cancel"
                  loading={loading}
                />
              )}
            </BtnContainer>
          </Row>
        </form>
      </div>
    </div>
  );
}

ProjectEditor.defaultProps = {
  showCancelBtn: false,
  projectData: null,
  hasError: false,
  onClickCancel: () => {},
  loading: false
};

export default ProjectEditor;
