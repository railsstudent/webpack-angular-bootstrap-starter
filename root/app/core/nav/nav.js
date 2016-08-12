class NavCtrl {
  constructor() {
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
        text: 'GruntJs',
        link: 'http://gruntjs.com/'
      }, {
        text: 'GulpJs',
        link: 'http://gulpjs.com/'
      }]
    };
  }
}

export default NavCtrl;
