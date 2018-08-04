"use strict";

import {expect} from 'chai';
import Ford from '../../src/pricing_rules/ford';
import PackageType from '../../src/model_helper/package_type';

describe("Apply pricing rules for Ford", () => {
    it("gives 5 for 4 deal on classic ad", () => {
        expect (
            Ford([PackageType.CLASSIC, PackageType.CLASSIC, PackageType.CLASSIC, PackageType.CLASSIC, PackageType.CLASSIC])
        ).to.be.equal(1079.96)
    })

    it("should give discount on standout ad", () => {
        expect(
            Ford([PackageType.STANDOUT])
        ).to.be.equal(309.99)
    })

    it("gets discount on 3 or more premium ads", () => {
        expect (
            Ford([PackageType.PREMIUM, PackageType.PREMIUM, PackageType.PREMIUM])
        ).to.be.equal(1169.97)
    })
    
    it("should calculate cart value", () => {
        expect (
            Ford([PackageType.CLASSIC, PackageType.STANDOUT, PackageType.PREMIUM])
        ).to.be.equal(974.97)
    })
})