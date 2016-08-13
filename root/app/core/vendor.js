module.exports = function() {
  /* Styles */
  /* bootstrap 3 style */
  require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
  /* font awesome icon css */
  require('../../node_modules/font-awesome/css/font-awesome.min.css');
  require('../index.scss');

  /* JS */
  /* attach to global context. $ and jQuery for bootstrap */
  global.$ = global.jQuery = require('jquery');
  /* Will load all of Bootstrap's jQuery plugins onto the jQuery object */
  require('bootstrap');
  const angular = require('angular');
};
