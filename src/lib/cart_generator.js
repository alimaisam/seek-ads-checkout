import Cart from "../model/cart";
import PackageType from "../model_helper/package_type"
import Customers from "../model_helper/customer_list"

const generator = {
    generate: () => {
        //return new Cart({order_id: 1, customer_id: Customers.UNILEVER, packages:[PackageType.CLASSIC, PackageType.PREMIUM, PackageType.CLASSIC, PackageType.CLASSIC]});
        //return new Cart({order_id: 1, customer_id: Customers.JOBSTREET, packages:[PackageType.CLASSIC, PackageType.STANDOUT, PackageType.PREMIUM]});
        //return new Cart({order_id: 1, customer_id: Customers.APPLE, packages:[PackageType.STANDOUT, PackageType.STANDOUT, PackageType.STANDOUT, PackageType.PREMIUM]});
        //return new Cart({order_id: 1, customer_id: Customers.NIKE, packages:[PackageType.PREMIUM, PackageType.PREMIUM, PackageType.PREMIUM, PackageType.PREMIUM]});
        //return new Cart({order_id: 1, customer_id: Customers.FORD, packages:[PackageType.PREMIUM, PackageType.PREMIUM, PackageType.PREMIUM, PackageType.PREMIUM]});
        return new Cart({order_id: 1, customer_id: Customers.FORD, packages:[PackageType.CLASSIC, PackageType.CLASSIC, PackageType.CLASSIC, PackageType.CLASSIC, PackageType.CLASSIC]});
        //return new Cart({order_id: 1, customer_id: Customers.FORD, packages:[PackageType.STANDOUT]});
    },

    generateFromRequestBody: (body) => {
        var packages = [];
        for (let key in body.packages) {
            packages.push(PackageType[body.packages[key]]);
        }

        return new Cart({
            order_id: body.order_id, 
            customer_id: Customers[body.customer],
            packages
        });
    }
};

export default generator;