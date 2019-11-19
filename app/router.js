'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  // router.get('/news', controller.news.list);
  // router.post('/login', controller.login.info);
  router.resources('login', '/login', controller.login.info);
  router.resources('users', '/v1/users', 'users');
};
