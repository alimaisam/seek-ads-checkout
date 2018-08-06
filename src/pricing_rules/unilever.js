import _ from 'lodash';
import PackageType from '../model_helper/package_type';

const rule = packages => {
    var cart_value = 0;
    var count = 0;
    var filteredArray = [];

    //check for classic ads and when count reaches 3,
    //remove last added package to give discount of 3 for 2
    for( let key in packages ) {
        if (_.isEqual(packages[key], PackageType.CLASSIC)) {
            filteredArray.push(packages[key]);
            count++;
            if (count === 3) {
                filteredArray.pop();
                count = 0;
            }
        } else {
            filteredArray.push(packages[key]);
        }
    }

    for ( let key in filteredArray) {
        cart_value += filteredArray[key].price;
    }

    return cart_value;
}

export default rule;