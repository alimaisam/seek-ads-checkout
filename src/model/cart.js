
import _ from 'lodash';
import Customers from '../model_helper/customer_list';
import PricingRules from '../pricing_rules/index';

export default class Cart {
    constructor(inCart) {
      this.order_id = inCart.order_id;
      this.customer_id = inCart.customer_id.id;
      this.packages = inCart.packages;
    }
  
    calculateCartValue() {

      if (_.isEqual(this.customer_id, Customers.UNILEVER.id)) {
          return PricingRules.unilever(this.packages);
      } else if (_.isEqual(this.customer_id, Customers.APPLE.id)) {
          return PricingRules.apple(this.packages);
      } else if (_.isEqual(this.customer_id, Customers.NIKE.id)) {
          return PricingRules.nike(this.packages);
      } else if (_.isEqual(this.customer_id, Customers.FORD.id)) {
          return PricingRules.ford(this.packages);
      } else {
          return PricingRules.default(this.packages);
      }
    }
}