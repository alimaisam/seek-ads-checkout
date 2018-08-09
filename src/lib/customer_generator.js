import Customer from "../model/customer";
import PackageType from "../model_helper/package_type"
import Customers from "../model_helper/customer_list"

const generator = {
    generate: () => {
        return new Customer({customer_id: 1, name: 'XYZ'});
        //return new Cart({order_id: 1, customer_id: Customers.JOBSTREET, packages:[PackageType.CLASSIC, PackageType.STANDOUT, PackageType.PREMIUM]});
        //return new Cart({order_id: 1, customer_id: Customers.APPLE, packages:[PackageType.STANDOUT, PackageType.STANDOUT, PackageType.STANDOUT, PackageType.PREMIUM]});
        //return new Cart({order_id: 1, customer_id: Customers.NIKE, packages:[PackageType.PREMIUM, PackageType.PREMIUM, PackageType.PREMIUM, PackageType.PREMIUM]});
        //return new Cart({order_id: 1, customer_id: Customers.FORD, packages:[PackageType.PREMIUM, PackageType.PREMIUM, PackageType.PREMIUM, PackageType.PREMIUM]});
        //return new Cart({order_id: 1, customer_id: Customers.FORD, packages:[PackageType.CLASSIC, PackageType.CLASSIC, PackageType.CLASSIC, PackageType.CLASSIC, PackageType.CLASSIC]});
        //return new Cart({order_id: 1, customer_id: Customers.FORD, packages:[PackageType.STANDOUT]});
    },
};

export default generator;