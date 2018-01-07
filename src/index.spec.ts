import * as ChinesePostcode from "./index";

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;

describe('ChinesePostcode', () => {
    describe('getAddress', () => {
        it('should return single address when given exclusive postcode', () => {
            const addresses = ChinesePostcode.getAddress('843000');
            expect(addresses).to.have.lengthOf(1);
            expect(addresses[0].province).to.be.equal('新疆');
            expect(addresses[0].city).to.be.equal('阿克苏地区');
            expect(addresses[0].county).to.be.equal('阿克苏市');
        })
        it('should return multiple addresses when given shared postcode', () => {
            const addresses = ChinesePostcode.getAddress('421001');
            expect(addresses).to.have.lengthOf(2);
            expect(addresses[0].province).to.be.equal('湖南');
            expect(addresses[0].city).to.be.equal('衡阳市');
            expect(addresses[0].county).to.be.equal('石鼓区');
            expect(addresses[1].province).to.be.equal('湖南');
            expect(addresses[1].city).to.be.equal('衡阳市');
            expect(addresses[1].county).to.be.equal('蒸湘区');
        })
        it('should return undefined when given unknown postcode', () => {
            const address = ChinesePostcode.getAddress('unknown postcode');
            expect(address).to.be.undefined;
        })
    })

    describe('getPostcode', () => {
        it('should return single address when given exclusive postcode', () => {
            const postcode = ChinesePostcode.getPostcode({province: '湖南', city: '怀化市', county: '靖州苗族侗族自治县'});
            expect(postcode).to.be.equal('418414');
        })
        it('should return undefined when given unknown postcode', () => {
            const postcode = ChinesePostcode.getPostcode({province: '湖南', city: '怀化市', county: '自治县'});
            expect(postcode).to.be.undefined
        })
    })
})