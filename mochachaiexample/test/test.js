const chai = require('chai')
const expect = chai.expect
//const validator = require('../src/validator')
describe("addtion function add()", () => {
	it("should add two numbers", ()=> {
		const sum = 4+5;
		const result = 9;
		expect(sum).to.equal(result);
	})
})