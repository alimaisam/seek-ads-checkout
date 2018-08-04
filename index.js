import express from "express";
import bodyParser from "body-parser";
import cart_generator from "./src/lib/cart_generator";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send('This is a server for Seek Ads Checkout');
});

app.get("/cart", (req, res) => {
    let cart = cart_generator.generate();
    res.send({cart, total_price: cart.calculateCartValue()});
})

app.post("/checkout", (req, res) => {
    let cart = cart_generator.generateFromRequestBody(req.body);
    res.send({cart, total_price: cart.calculateCartValue()});
})

app.listen(3001, () => {
    console.log("App listening on port 3001!");
});