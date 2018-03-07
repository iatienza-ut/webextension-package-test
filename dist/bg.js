const log = (msg) => {
  console.log('BRANCH CHANGE', msg);
};

const bglog = () => {
  log('BACKGROUND SCRIPT');
};

export default bglog;
