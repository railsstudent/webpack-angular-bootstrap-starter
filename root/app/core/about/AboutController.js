
class AboutController {
  constructor() {
    this.name = 'Jane Doe';
    this.gender = 'Female';
    this.visible = true;
    this.buttonText = 'Hide Me!!!!';
  }

  toggleVisible() {
    this.visible = !this.visible;
    if (this.visible) {
      this.buttonText = 'Hide Me!!!!';
    } else {
      this.buttonText = 'Show Me!!!!';
    }
    console.log('visible = ' + this.visible);
  }
}

export default AboutController;
