import axios from 'axios';
import config from '../../config/config';

// eslint-disable-next-line import/prefer-default-export
export const getBacklogData = async () => {
  const path = `${config.apiAddress}/backlogs`;
  const response = await axios.get(path);
  return response.data;
};
