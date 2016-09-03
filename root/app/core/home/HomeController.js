'use strict';

const SERVICE = new WeakMap();

class HomeController {

  constructor(HomeService) {
    SERVICE.set(this, HomeService);
    let ref = this;
    SERVICE.get(this).getTechnologies().then(
         technologies => { ref.technologies = technologies; })
         .catch(error => { console.log(error); });

    SERVICE.get(this).getLoaders().then(
       loaders => { ref.loaders = loaders; })
       .catch(error => { console.log(error); });
  }
}

export default HomeController;
