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
  }

  getTechnologies() {
    return this.technologies;
  }

  static homeFactory(){
    return new HomeService();
  }
}

export default HomeService;
