'use strict';

const { policies } = require("../../../plugins/generate-html/server");

/**
 * get-layout router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::get-layout.get-layout');
