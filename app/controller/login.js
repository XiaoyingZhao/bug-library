/* eslint valid-jsdoc: "off" */

'use strict';
const Controller = require('egg').Controller;
// 定义创建接口的请求参数规则
const createRule = {
  username: 'string',	// 自定义的校验规则
  password: 'string',	// 自带的校验规则
};

class loginController extends Controller {
  async info() {
    const { ctx } = this;
    // 校验 `ctx.request.body` 是否符合我们预期的格式
    // 如果参数校验未通过，将会抛出一个 status = 422 的异常
    console.log(1111, ctx.query);
    // ctx.validate(createRule, ctx.request.body);
    const userInfo = await ctx.service.login.create(ctx.query);
    ctx.body = userInfo;
  }
}
module.exports = loginController;
