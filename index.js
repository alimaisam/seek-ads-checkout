import express from "express";
import bodyParser from "body-parser";
import cart_generator from "./src/lib/cart_generator";
import Cart from './src/model/cart'

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send('This is a server for Seek Ads Checkout');
});

// generates the cart and calculates the cart value
app.get("/cart", (req, res) => {
    let cart = cart_generator.generate();
    //console.log(cart);
    res.send({cart, total_price: Cart.calculateCartValue(cart)});
})

//get input from user to generate the cart and calculates the cart value
app.post("/checkout", (req, res) => {
    let cart = cart_generator.generateFromRequestBody(req.body);
    res.send({cart, total_price: cart.calculateCartValue()});
})

app.listen(3001, () => {
    console.log("App listening on port 3001!");
});