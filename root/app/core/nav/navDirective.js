let NavCtrl = function _NavCtrl() {
    this.app = {
      title: 'Module Loaders',
      version: '0.3.0',
      links: [{
        text: 'Webpack',
        link: 'http://webpack.github.io'
      }, {
        text: 'Require.js',
        link: 'http://requirejs.org/'
      }, {
        text: 'Jspm',
        link: 'http://jspm.io/'
      }, {
        text: 'Grunt',
        link: 'http://gruntjs.com/'
      }]
    };
};

function navDirective() {
  require('./nav.scss');  // load styles for the component
  return {
    controller: NavCtrl,
    controllerAs: 'nav',
    template : require('./nav.html')
  };
}

export default navDirective;
