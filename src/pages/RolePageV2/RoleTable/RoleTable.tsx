import React from 'react';
import styles from './RoleTable.module.scss';
import { IRole } from '../../../types';

interface IRoleTable {
  roles: IRole[];
}

function RoleTable(props: IRoleTable) {
  const { roles } = props;
  return (
    <table className={styles['roles-table-container']}>
      <thead>
        <tr>
          <th className={styles.roles}>Roles</th>
          {roles.map((role) => {
            return <th key={role.id}>{role.name}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className={styles.permissions}>Permissions</th>
          {roles.map((role) => {
            return <th key={role.id}>permission list</th>;
          })}
        </tr>
      </tbody>
    </table>
  );
}

export default RoleTable;
