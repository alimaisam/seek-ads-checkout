const rule = packages => {
    var cart_value = 0;
    for ( let key in packages) {
        cart_value += packages[key].price;
    }

    return cart_value;
}

export default rule;