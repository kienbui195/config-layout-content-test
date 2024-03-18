'use strict';

/**
 * get-layout service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::get-layout.get-layout');
