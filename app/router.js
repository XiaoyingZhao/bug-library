'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/login', controller.login.info);
  // router.resources('login', '/api/v1/login', controller.login.info);
  router.resources('users', '/v1/users', 'users');
};
