"use strict";

import {expect} from 'chai';
import Apple from '../../src/pricing_rules/apple';
import PackageType from '../../src/model_helper/package_type';

describe("Apply pricing Rules for Apple", () => {
    it("should give discount on standout ad", () => {
        expect(
            Apple([PackageType.STANDOUT])
        ).to.be.equal(299.99)
    })

    it("should not give discout on classic ad", () => {
        expect(
            Apple([PackageType.CLASSIC])
        ).to.be.equal(269.99)
    })

    it("should not give discout on premium ad", () => {
        expect(
            Apple([PackageType.PREMIUM])
        ).to.be.equal(394.99)
    })
}) 