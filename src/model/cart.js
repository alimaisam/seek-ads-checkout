
import PricingRules from '../pricing_rules/index';

const Cart = {
    create: (inCart) => {
        return {
            order_id: inCart.order_id,
            customer_id: inCart.customer_id.id,
            packages: inCart.packages
        }
    },

    calculateCartValue: (inCart) => {
        if (PricingRules.hasOwnProperty(inCart.customer_id)) {
            return PricingRules[inCart.customer_id](inCart.packages);
        } else {
            return PricingRules.default(inCart.packages);
        }
    }
}

export default Cart;

// export default class Cart {
//     constructor(inCart) {
//       this.order_id = inCart.order_id;
//       this.customer_id = inCart.customer_id.id;
//       this.packages = inCart.packages;
//     }
  
//     calculateCartValue() {
//         if (PricingRules.hasOwnProperty(this.customer_id)) {
//             return PricingRules[this.customer_id](this.packages);
//         } else {
//             return PricingRules.default(this.packages);
//         }
//     }
// }

