import React, { useEffect, useState } from 'react';
import { getUsers } from '../../../../api/user/user';
import useOutsideAlerter from '../../../../hooks/OutsideAlerter';
import { IOnChangeProjectLead } from '../../../../types';

import styles from './UserSelect.module.scss';

interface IUserSelect {
  onChange: (e: IOnChangeProjectLead) => void;
  value: any;
  allowEdit: boolean;
}

export default function UserSelect(props: IUserSelect) {
  const { onChange, value, allowEdit = true } = props;
  const [userList, setUserList] = useState<any>([]);
  const { visible, setVisible, myRef } = useOutsideAlerter(false);
  const handleClickOutside = () => setVisible(true);
  const [query, setQuery] = useState('');
  const [queryUserList, setQueryUserList] = useState<any>([]);

  useEffect(() => {
    const getUsersList = async () => {
      if (userList.length === 0) {
        const res = await getUsers();
        setUserList(res.data);
      }
      if (Array.isArray(userList)) {
        const filteredUsers = userList.filter((user) => {
          const name = user.userName && user.userName !== '' ? user.userName : user.name;
          return name?.toLowerCase().includes(query.toLowerCase());
        });
        return setQueryUserList(filteredUsers);
      }
      return setQueryUserList(userList);
    };
    getUsersList();
  }, [userList, query]);

  const onClickUser = (user: string | null) => {
    onChange({ target: { name: 'projectLeadId', value: user } });
    setVisible(false);
  };

  return (
    <div ref={myRef} className={styles.leadDropdownMenu}>
      <div className={styles.leadDropdownContainer}>
        {visible && allowEdit ? (
          <div className={styles.leadDropdownOpen}>
            <div className={styles.leadInputField}>
              <img
                className={styles.userAvatar}
                src={
                  value?.avatarIcon ||
                  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'
                }
                alt="avatar"
              />
              <input dir="auto" type="Text" onChange={(e) => setQuery(e.target.value)} />
              <button className={styles.optionToggle} type="button" onClick={handleClickOutside}>
                <i role="button" aria-label="openDropdown" tabIndex={0} />
              </button>
            </div>
            <div className={styles.leadMenu}>
              <ul>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      onClickUser(null);
                    }}
                  >
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
                      alt="avatar"
                    />
                    <span>Unassigned</span>
                  </button>
                </li>
                {queryUserList.map((user: any) => (
                  <li key={user.id}>
                    <button
                      type="button"
                      onClick={() => {
                        onClickUser(user);
                      }}
                    >
                      <img
                        src={
                          user.avatarIcon ||
                          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'
                        }
                        alt="avatar"
                      />
                      <span>
                        {user.userName && user.userName !== '' ? user.userName : user.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <button className={styles.leadInputClose} type="button" onClick={handleClickOutside}>
            <img
              src={
                value?.avatarIcon ||
                'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'
              }
              alt="avatar"
            />
            <span>{value?.name || 'Unassigned'}</span>
          </button>
        )}
      </div>
    </div>
  );
}
