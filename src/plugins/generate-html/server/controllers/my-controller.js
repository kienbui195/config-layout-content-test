'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('generate-html')
      .service('myService')
      .getWelcomeMessage();
  },
});
