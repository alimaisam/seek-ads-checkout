import _ from 'lodash';
import PackageType from '../model_helper/package_type';

const rule = packages => {
    const fordDeal = JSON.parse(JSON.stringify(packages));
    const fordPremiumDeal = JSON.parse(JSON.stringify(packages));
    var cart_value = 0;
    var count = 0;
    var filteredArray = [];
    for( let key in fordDeal ) {
        // for classic ad give discount of 5 for 4,
        // by removing last package if count reaches 5
        if (_.isEqual(fordDeal[key], PackageType.CLASSIC)) {
            filteredArray.push(fordDeal[key]);
            count++;
            if (count === 5) {
                filteredArray.pop();
                count = 0;
            }
        // if package type is standout then add discounted price
        } else if (_.isEqual(fordDeal[key], PackageType.STANDOUT)) {
            fordDeal[key].price = 309.99;
            filteredArray.push(fordDeal[key]);
        } 
    }

    //create an array for premium ads
    var premiumAds = packages.filter(item => {
        return item.id == PackageType.PREMIUM.id;
    })

    // give discount on premium ads if there are 3 or more ads in the package
    if (premiumAds.length >= 3) {
        for (let key in fordPremiumDeal) {
            if (_.isEqual(fordPremiumDeal[key], PackageType.PREMIUM)) {
                fordPremiumDeal[key].price = 389.99;
                filteredArray.push(fordPremiumDeal[key]);
            }
        }
    } else {
        for (let key in fordPremiumDeal) {
            if (_.isEqual(fordPremiumDeal[key], PackageType.PREMIUM)) {
                filteredArray.push(fordPremiumDeal[key]);
            }
        }
    }

    for ( let key in filteredArray) {
        cart_value += filteredArray[key].price;
    }

    return cart_value;
}

export default rule;