'use strict';
import _ from 'lodash';

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

    this.loaders = _.sortBy(
                        _.map(['babel', 'css', 'scss', 'json', 'html', 'file', 'raw'],
                          e => ({ 'name' : e + '-loader' })),
                         e => e.name
                      );
    console.log(this.loaders);
  }

  getTechnologies() {
    // use ES6 promise to return technologies
    return new Promise(resolve => resolve(this.technologies));
  }

  getLoaders() {
    return new Promise(resolve => resolve(this.loaders));
  }

  static homeFactory(){
    return new HomeService();
  }
}

export { HomeService };
