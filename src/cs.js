import log from './lib/log';
import { default as capitalize } from 'lodash-es/capitalize';

const cslog = () => {
  log(capitalize('CONTENT SCRIPT'));
};

export default cslog;
