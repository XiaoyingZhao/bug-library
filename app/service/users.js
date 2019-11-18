/* eslint valid-jsdoc: "off" */

'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  constructor(ctx) {
    super(ctx);
  }
  async insert(sql, opts) {
    const result = await this.app.mysql.insert('bug_user', { title: 'Hello World' });
    return this.app.mysql.query(sql, opts);
  }

  async check(params) {
    const result = await this.app.mysql.select('bug_user', {
      where: { username: params.username, password: params.password },
    });
    return result.length > 0;
  }
}
module.exports = UserService;
