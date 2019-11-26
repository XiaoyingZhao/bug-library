'use strict';
/**
 * 配置中间件
 * options: 中间件的配置项，框架会将 app.config[${middlewareName}] 传递进来。
   app: 当前应用 Application 的实例。
 */

module.exports = (options, app) => {
  // 中间件传值，在config.default.js中配置
  console.log(options);
  return async function common(ctx, next) {
    console.log(ctx.request.ip);
    await next();
  };
};

