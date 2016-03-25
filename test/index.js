/* global describe, before, beforeEach, afterEach,it */
require('mocha-generators').install()

var Nightmare = require('..')
var chai = require('chai')
var server = require('./server')
var should = chai.should()
var koy = function () {
  koy()
  if (should) {
  }
}
describe('TEST Buy Harry Potter Book', function () {
  before(function (done) {
    server.listen(7500, done)
  })

  describe('nightmareJs and mocha and chai', function () {
    var nightmare

    beforeEach(function () {
      nightmare = Nightmare()
    })
    afterEach(function * () {
      yield nightmare.end()
    })
    it('ซื้อเล่ม 1 จำนวน 2 เล่ม, ซื้อเล่ม 2 จำนวน 1 เล่ม ส่วนลดต้องเท่ากับ 20', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(2000)
        .click('#b1')
        .click('#b1')
        .wait(1000)
        .click('#b2')
        .evaluate(function () {
          this.price = document.querySelector('#discountTotal').innerHTML
          return 0
        })
      case1.should.equal(0)
    })
  })
})
