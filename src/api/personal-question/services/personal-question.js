'use strict';

/**
 * personal-question service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::personal-question.personal-question');
