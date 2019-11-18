/* eslint valid-jsdoc: "off" */

'use strict';
const Service = require('egg').Service;
class loginService extends Service {
  // constructor(ctx) {
  //   super(ctx);
  //   console.log(ctx);
  // }
  async create (params) {
    console.log(params);
    const id = params.id || '';
    const sql = `select * from bug_user where id=${id}`;
    const user = await this.app.mysql.query(sql);
    // const user = await this.app.mysql.query('select * from bug_user', '');
    return user;
    // 调用 CNode V1 版本 API
    // const result = await this.ctx.curl(`${this.root}/login`, {
    //   method: 'get',
    //   data: params,
    //   dataType: 'json',
    //   contentType: 'json',
    // });
    // 检查调用是否成功，如果调用失败会抛出异常
    // this.checkSuccess(result);
    // 返回创建的 topic 的 id
    // return result.data.id;
  }
  // 封装统一的调用检查函数，可以在查询、创建和更新等 Service 中复用
  checkSuccess (result) {
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
