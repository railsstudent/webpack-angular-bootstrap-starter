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
      },
      {
        'name' : 'Webpack Dashboard',
        'link' : 'https://github.com/FormidableLabs/webpack-dashboard'
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
    // use ES6 promise to return technologies
    let p = new Promise(
      (resolve, reject) => {
         resolve(this.technologies);
      });
    return p;
  }

  getLoaders() {
    let p = new Promise(
      (resolve, reject) => {
          resolve(this.loaders)
      });
    return p;
  }

  static homeFactory(){
    return new HomeService();
  }
}

export default HomeService;
