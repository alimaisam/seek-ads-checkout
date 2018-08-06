import Unilever from  './unilever';
import Apple from './apple'
import Nike from './nike';
import Ford from './ford';
import Default from './default';

// when a new deal is created for a company just add a property here
const applyDeal = {

    unilever: (packages) => { return Unilever(packages) },
    apple: (packages) => { return Apple(packages) },
    nike: (packages) => { return Nike(packages) },
    ford: (packages) => {  return Ford(packages) },
    default: (packages) => { return Default(packages) },
}

export default applyDeal;
