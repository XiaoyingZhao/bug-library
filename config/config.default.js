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

  // 增加配置中间件,数组顺序即为中间件的加载顺序
  config.middleware = [ 'common' ];
  // 给中间件配置options参数
  config.common = {
    abc: '123567890',
  };

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
    myAppName: 'bug-library',
  };

  return {
    ...config,
    ...userConfig,
  };
};
