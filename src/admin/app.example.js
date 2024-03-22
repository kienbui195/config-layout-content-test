// @ts-ignore
import favicon from './extensions/favicon.png'

const config = {
  head: {
    favicon,
  },
};

const bootstrap = app => {
  console.log('bootstrap', app);
};

export default {
  config,
  bootstrap,
};