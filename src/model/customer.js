export default class {
    constructor(customer) {
      this.id = customer.id;
      this.name = customer.name;
    }
  
    get ModelName() {
      return "Customer";
    }
  }