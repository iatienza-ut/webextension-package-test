import log from './lib/log';
import { capitalize } from 'lodash';

const cslog = () => {
  log(capitalize('CONTENT SCRIPT'));
};

export default cslog;
