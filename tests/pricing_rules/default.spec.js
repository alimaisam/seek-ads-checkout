"use strict";

import {expect} from 'chai';
import Default from '../../src/pricing_rules/default';
import PackageType from '../../src/model_helper/package_type';

describe("Apply pricing rules for Jobstreet", () => {
    it("calculate total price for default customer", () => {
        expect (
            Default([PackageType.CLASSIC, PackageType.STANDOUT, PackageType.PREMIUM])
        ).to.be.equal(987.97)
    })
})

