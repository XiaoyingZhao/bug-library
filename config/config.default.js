/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1571017940871_3680';

  // add your middleware config here
  config.middleware = [];
  config.view = {
    defaultExtension: '.html',
    defaultViewEngine: 'nunjucks',
    mapping: { '.nj': 'nunjucks' },
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.cors = {
    origin: '*', // 匹配规则  域名+端口  *则为全匹配
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  config.mysql = {
    client: {
      host: '192.168.2.93',
      port: '3306',
      user: 'root',
      password: '',
      database: 'febug',
    },
    app: true,
    agent: false,
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
