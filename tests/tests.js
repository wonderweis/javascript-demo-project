// testing code goes here

'use strict'

var chai = require('chai');
chai.should(); /*chai.should(), chai.expect, chai.assert*/

var myApp = require('../app/library.js');

describe("Arithmetic Functionality", function() {
  it("should return 2 as average for 1, 2, 3", function() {
    myApp.computeAverage(1,2,3).should.equal(2);
  })
  it("should return 5 as average for 3, 7, 5", function() {
    myApp.computeAverage(3, 7, 5).should.equal(5);
  })
  it("should return 120 as factorial for 5", function() {
    myApp.computeFactorial(5).should.equal(120);
  })
})


describe("Temperature Conversion Functionality", function() {
  it("should return 104 for Celcius value 40", function() {
    myApp.convertTempCtoF(40).should.equal(104);
  })
  it("should return 140 for Celcius value 60", function() {
    myApp.convertTempCtoF(60).should.equal(140);
  })
  it("should return 60 for Fahrenheit value 140", function() {
    myApp.convertTempFtoC(140).should.equal(60);
  })
  it("should return 40 for Fahrenheit value 104", function() {
    myApp.convertTempFtoC(104).should.equal(40);
  })
})
