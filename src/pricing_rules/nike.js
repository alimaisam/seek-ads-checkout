import _ from 'lodash';
import PackageType from '../model_helper/package_type';

const rule = packages => {
    var cart_value = 0;

    // filter array for only premium packages
    var filteredArray = packages.filter(item => {
        return item.id == PackageType.PREMIUM.id;
    })

    //only apply the discout if premium ads are 4 or more
    if (filteredArray.length >= 4) {
        for (let key in packages) {
            if (_.isEqual(packages[key], PackageType.PREMIUM)) {
                cart_value += 379.99;
            } else {
                cart_value += packages[key].price;
            }
        }
    } else {
        for ( let key in packages) {
            cart_value += packages[key].price;
        }
    }

    return cart_value;
}

export default rule;