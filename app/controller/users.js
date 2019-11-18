
/* eslint valid-jsdoc: "off" */

'use strict';
const { Controller } = require('egg');
// 定义创建接口的请求参数规则
const createRule = {
  username: 'string',	// 自定义的校验规则
  password: 'string',	// 自带的校验规则
};
class UsersController extends Controller {
  constructor(ctx) {
    super(ctx);

    this.createRule = {

    };
  }
  async create () {
    const { ctx } = this;
    ctx.validate(createRule, ctx.request.body);
    const userInfo = await ctx.service.users.check(ctx.request.body);
    ctx.body = {
      data: userInfo,
      status: 200,
    };
    ctx.status = 200;
  }
  async destroy () {
    const { ctx } = this;
    this.ctx.body = '删除';
  }
  async update () {
    const { ctx } = this;
    this.ctx.body = '修改';
  }
  async show () {
    const { ctx } = this;
    this.ctx.body = '查询';
  }
  async index () {
    const { ctx } = this;
    console.log(ctx.request.body);
    const userInfo = await ctx.service.users.check({
      username: 'zxy',
      password: 123456,
    });
    ctx.body = {
      id: userInfo,
    };
    ctx.status = 200;

  }
  async new () {
    const { ctx } = this;
    this.ctx.body = '创建页面';
  }
  async edit () {
    const { ctx } = this;
    this.ctx.body = '修改页面';
  }
}

module.exports = UsersController;
