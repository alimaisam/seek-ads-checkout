"use strict";

import {expect} from 'chai';
import Nike from '../../src/pricing_rules/nike';
import PackageType from '../../src/model_helper/package_type';

describe("Apply pricing rules for Nike", () => {
    it("gets discount on 4 or more premium ads", () => {
        expect (
            Nike([PackageType.PREMIUM, PackageType.PREMIUM, PackageType.PREMIUM, PackageType.PREMIUM])
        ).to.be.equal(1519.96)

        expect (
            Nike([PackageType.PREMIUM, PackageType.PREMIUM, PackageType.PREMIUM])
        ).to.be.equal(1184.97)

        expect (
            Nike([PackageType.PREMIUM, PackageType.PREMIUM, PackageType.PREMIUM, PackageType.PREMIUM, PackageType.CLASSIC])
        ).to.be.equal(1789.95)
    })
})