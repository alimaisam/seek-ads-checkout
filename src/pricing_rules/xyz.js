import _ from 'lodash'
import PackageType from '../model_helper/package_type';

const rule = packages => {
    var cart_value = 0;
    var filteredArray = [];
    var count = 0;
    //add prices of all packages and return the value
    for (let key in packages) {
        if (_.isEqual(packages[key], PackageType.STANDOUT)) {
          cart_value += 299.99;
        } else if (_.isEqual(packages[key], PackageType.CLASSIC)) {
            filteredArray.push(packages[key]);
            count++;
            if (count === 3) {
                filteredArray.pop();
                count = 0;
            }
        } else {
            cart_value += packages[key].price;
        }
    }

    for ( let key in filteredArray) {
        cart_value += filteredArray[key].price;
    }
    return cart_value
}

export default rule;