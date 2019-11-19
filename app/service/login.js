/* eslint valid-jsdoc: "off" */

'use strict';
const Service = require('egg').Service;
class loginService extends Service {
  // constructor(ctx) {
  //   super(ctx);
  //   console.log(ctx);
  // }
  async check(params) {
    const username = params.username || '';
    const password = params.password || '';
    console.log(username);
    // const sql = `select * from bug_user where username='${username}'`;
    // const user = await this.app.mysql.query(sql);
    const user = await this.app.mysql.get('bug_user', { username, password });
    if (user) {
      return user;
    }
    return '用户不存在';

  }
  async create(params) {
    const username = params.username || '';
    const password = params.password || '';
    console.log(username);
    // const sql = `select * from bug_user where username='${username}'`;
    // const user = await this.app.mysql.query(sql);
    const user = await this.app.mysql.get('bug_user', { username });
    if (user) return '该用户已存在';
    await this.app.mysql.insert('bug_user', { username, password });
    console.log(user);
  }
  // 封装统一的调用检查函数，可以在查询、创建和更新等 Service 中复用
  checkSuccess(result) {
    console.log(12356789);
    if (result.status !== 200) {
      const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknown error';
      this.ctx.throw(result.status, errorMsg);
    }
    if (!result.data.success) {
      // 远程调用返回格式错误
      this.ctx.throw(500, 'remote response error', { data: result.data });
    }
  }
}
module.exports = loginService;
