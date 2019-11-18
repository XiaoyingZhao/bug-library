'use strict';

/** @type Egg.EggPlugin */

// exports.nunjucks = {
//   enable: true,
//   package: 'egg-view-nunjucks'
// };
// exports.mysql = {
//   enable: true,
//   package: 'egg-mysql',
// };
module.exports = {
  // had enabled by egg
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
};
// exports.nunjucks = {
//   enable: true,
//   package: 'egg-view-nunjucks'
// };
