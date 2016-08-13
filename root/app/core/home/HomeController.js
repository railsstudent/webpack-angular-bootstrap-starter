'use strict';

//import HomeService from './HomeService';

const SERVICE = new WeakMap();

class HomeController {

  constructor(HomeService) {
    SERVICE.set(this, HomeService);
    this.technologies = SERVICE.get(this).getTechnologies();
  }
}

export default HomeController;
