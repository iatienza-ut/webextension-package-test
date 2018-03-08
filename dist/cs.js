import { capitalize } from 'lodash-es';

const log = (msg) => {
  console.log('BRANCH CHANGE', msg);
};

const cslog = () => {
  log(capitalize('CONTENT SCRIPT'));
};

export default cslog;
