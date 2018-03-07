const log = (msg) => {
  console.log('BRANCH CHANGE', msg);
};

const cslog = () => {
  log('CONTENT SCRIPT');
};

export default cslog;
