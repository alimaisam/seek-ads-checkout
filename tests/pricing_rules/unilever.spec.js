"use strict";

import {expect} from 'chai';
import Unilever from '../../src/pricing_rules/unilever';
import PackageType from '../../src/model_helper/package_type';

describe("Apply pricing rules for Unilever", () => {
    it("gives 3 for 2 deal on classic ad", () => {
        expect (
            Unilever([PackageType.CLASSIC, PackageType.CLASSIC, PackageType.CLASSIC])
        ).to.be.equal(539.98)

        expect (
            Unilever([PackageType.CLASSIC, PackageType.CLASSIC, PackageType.CLASSIC, PackageType.PREMIUM])
        ).to.be.equal(934.97)
    })
})