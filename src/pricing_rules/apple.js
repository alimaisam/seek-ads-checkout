import _ from 'lodash';
import PackageType from '../model_helper/package_type';

const rule = packages => {
    var cart_value = 0;

    //check for packages type standout in array and add discounted value
    for (let key in packages) {
        if (_.isEqual(packages[key], PackageType.STANDOUT)) {
          cart_value += 299.99;
        } else {
          cart_value += packages[key].price;
        }
    }

    return cart_value;
}

export default rule;