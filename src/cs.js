import log from './lib/log';
import { capitalize } from 'lodash-es';

const cslog = () => {
  log(capitalize('CONTENT SCRIPT'));
};

export default cslog;
