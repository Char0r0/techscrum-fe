import axios from 'axios';
import config from '../../config/config';

export const getMembers = async (projectId: string) => {
  const path = `${config.apiAddress}/projects/${projectId}/members`;
  const res = await axios.get(path);
  return res;
};

export const inviteMember = async (
  email: string,
  defaultPassword: string,
  roleId: string,
  projectId: string
) => {
  const path = `${config.apiAddress}/projects/${projectId}/members/invite`;
  const res = await axios.post(path, { roleId, email, defaultPassword });
  return res;
};

export const updateMemberRole = async (roleId: string, userId: string, projectId: string) => {
  const path = `${config.apiAddress}/projects/${projectId}/members/${userId}`;
  const res = await axios.put(path, { roleId });
  return res;
};

export const removeMember = async (userId: string, projectId: string) => {
  const path = `${config.apiAddress}/projects/${projectId}/members/${userId}`;
  const res = await axios.delete(path);
  return res;
};
