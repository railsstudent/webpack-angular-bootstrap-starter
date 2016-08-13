'use strict';

class HomeService {
  constructor() {
    this.technologies = [
      {
        'name' : 'Angular',
        'link' : 'https://angularjs.org/'
      },
      {
        'name' : 'Webpack',
        'link' : 'https://webpack.github.io/'
      },
      {
        'name' : 'RequireJs',
        'link' : 'http://requirejs.org/'
      },
      {
        'name' : 'Bootstrap 3',
        'link' : 'http://getbootstrap.com/'
      },
      {
        'name' : 'Fontawesome',
        'link' : 'http://fontawesome.io/'
      }
    ];

    this.loaders = [
      {
        'name' : 'babel-loader',
      },{
        'name' : 'css-loader',
      }, {
        'name' : 'json-loader',
      }, {
        'name' : 'html-loader',
      }, {
        'name' : 'file-loader',
      }, {
        'name' : 'raw-loader',
      }
    ];
  }

  getTechnologies() {
    return this.technologies;
  }

  getLoaders() {
    return this.loaders;
  }

  static homeFactory(){
    return new HomeService();
  }
}

export default HomeService;
