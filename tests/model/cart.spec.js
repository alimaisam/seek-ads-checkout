"use strict"

import {expect} from 'chai';
import PackageType from "../../src/model_helper/package_type";
import Customers from "../../src/model_helper/customer_list";
import Cart from '../../src/model/cart';


describe("Cart Model", () => {
    it("should select unilever and calculate total cart value", () => {
        const cart = new Cart({
            order_id: 1, 
            customer_id: Customers.UNILEVER, 
            packages:[PackageType.CLASSIC, PackageType.PREMIUM, PackageType.CLASSIC, PackageType.CLASSIC]
        });

        expect(cart.calculateCartValue()).to.equal(934.97);
    })

    it("should select apple and calculate total cart value", () => {
        const cart = new Cart({
            order_id: 1, 
            customer_id: Customers.APPLE, 
            packages:[PackageType.STANDOUT, PackageType.STANDOUT, PackageType.STANDOUT, PackageType.PREMIUM]
        });

        expect(cart.calculateCartValue()).to.equal(1294.96);
    })

    it("should select default customer and calculate total cart value", () => {
        const cart = new Cart({
            order_id: 1, 
            customer_id: Customers.JOBSTREET,
            packages:[PackageType.CLASSIC, PackageType.STANDOUT, PackageType.PREMIUM]
        });

        expect(cart.calculateCartValue()).to.equal(987.97);
    })

    it("should select nike and calculate total cart value", () => {
        const cart = new Cart({
            order_id: 1, 
            customer_id: Customers.NIKE,
            packages:[PackageType.CLASSIC, PackageType.STANDOUT, PackageType.PREMIUM]
        });

        expect(cart.calculateCartValue()).to.equal(987.97);
    })

    it("should select ford and calculate total cart value", () => {
        const cart = new Cart({
            order_id: 1, 
            customer_id: Customers.FORD,
            packages:[PackageType.PREMIUM, PackageType.PREMIUM, PackageType.PREMIUM]
        });

        expect(cart.calculateCartValue()).to.equal(1169.97);
    })
})