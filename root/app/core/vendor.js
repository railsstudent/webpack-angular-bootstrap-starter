module.exports = function() {
  /* Styles */
  require('../index.scss');
  require('../../node_modules/mdi/css/materialdesignicons.min.css');

  /* JS */
  /* attach to global context. $ for Lumx, jQuery for velocity */
  global.$ = global.jQuery = require('jquery');
  require('velocity-animate');
  require('angular');
  /* LumX uses a global moment */
  global.moment = require('moment');
  require('node-lumx');
};
