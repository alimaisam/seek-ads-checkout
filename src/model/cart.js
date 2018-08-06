
import PricingRules from '../pricing_rules/index';

export default class Cart {
    constructor(inCart) {
      this.order_id = inCart.order_id;
      this.customer_id = inCart.customer_id.id;
      this.packages = inCart.packages;
    }
  
    calculateCartValue() {
        if (PricingRules.hasOwnProperty(this.customer_id)) {
            return PricingRules[this.customer_id](this.packages);
        } else {
            return PricingRules.default(this.packages);
        }
    }
}