/* eslint valid-jsdoc: "off" */

'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async insert(params) {
    const username = params.username || '';
    const password = params.password || '';
    console.log(username);
    const user = await this.app.mysql.get('bug_user', { username });
    if (user) return '该用户已存在';
    await this.app.mysql.insert('bug_user', { username, password });
  }

  async check(params) {
    // const result = await this.app.mysql.select('bug_user', {
    //   where: { username: params.username, password: params.password },
    // });
    // return result.length > 0;

    const username = params.username || '';
    const password = params.password || '';
    const user = await this.app.mysql.get('bug_user', { username, password });
    console.log(user);

    if (user) {
      return user;
    }
    return '用户不存在';
  }
}
module.exports = UserService;
