export default class {
  constructor(adPackage) {
    this.id = adPackage.id;
    this.name = adPackage.name;
    this.price = adPackage.price;
  }

  get ModelName() {
    return "Package";
  }
}