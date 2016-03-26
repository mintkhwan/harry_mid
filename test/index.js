/* global describe, before, beforeEach, afterEach,it */
require('mocha-generators').install()

var Nightmare = require('..')
var chai = require('chai')
var server = require('./server')
var should = chai.should()
var mint = function () {
  mint()
  if (should) {
  }
}
describe('***BanNaiJinBookStore***', function () {
  before(function (done) {
    server.listen(7500, done)
  })

  describe('Test By nightmarejs, mocha, chai', function () {
    var nightmare

    beforeEach(function () {
      nightmare = Nightmare()
    })
    afterEach(function * () {
      yield nightmare.end()
    })
    it('ศิลาอาถรรพ์ จำนวน 2 เล่ม, ห้องแห่งความลับ จำนวน 1 เล่ม >> ส่วนลด=20 บาท', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(1000)
        .click('#b1')
        .click('#b1')
        .click('#b2')
        .evaluate(function () {
          this.price = document.querySelector('#mint2').innerHTML
          return this.price
        })
      case1.should.equal('20')
    })
    it('ห้องแห่งความลับ จำนวน 3 เล่ม, ถ้วยอัคนี จำนวน 3 เล่ม >> ส่วนลด=60 บาท', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(1000)
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b2')
        .click('#b2')
        .click('#b2')
        .evaluate(function () {
          this.price = document.querySelector('#mint2').innerHTML
          return this.price
        })
      case1.should.equal('60')
    })
    it('ศิลาอาถรรพ์ จำนวน 1 เล่ม, ห้องแห่งความลับ จำนวน 1 เล่ม, ถ้วยอัคนี จำนวน 1 เล่ม >> ส่วนลด=60 บาท', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(1000)
        .click('#b1')
        .click('#b2')
        .click('#b3')
        .evaluate(function () {
          this.price = document.querySelector('#mint2').innerHTML
          return this.price
        })
      case1.should.equal('60')
    })
    it('ศิลาอาถรรพ์ จำนวน 10 เล่ม >> ส่วนลด=0 บาท', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(1000)
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .evaluate(function () {
          this.price = document.querySelector('#mint2').innerHTML
          return this.price
        })
      case1.should.equal('0')
    })
    it('ศิลาอาถรรพ์ จำนวน 2 เล่ม >> ส่วนลด=0 บาท', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(1000)
        .click('#b1')
        .click('#b1')
        .evaluate(function () {
          this.price = document.querySelector('#mint2').innerHTML
          return this.price
        })
      case1.should.equal('0')
    })
    it('ศิลาอาถรรพ์ จำนวน 2 เล่ม, ห้องแห่งความลับ จำนวน 2 เล่ม >> ส่วนลด=40 บาท', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(1000)
        .click('#b1')
        .click('#b1')
        .click('#b2')
        .click('#b2')
        .evaluate(function () {
          this.price = document.querySelector('#mint2').innerHTML
          return this.price
        })
      case1.should.equal('40')
    })
    it('ศิลาอาถรรพ์ จำนวน 1 เล่ม, ห้องแห่งความลับ จำนวน 2 เล่ม, อัซคาบัน จำนวน 3 เล่ม >> ส่วนลด=80 บาท', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(1000)
        .click('#b1')
        .click('#b2')
        .click('#b2')
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .evaluate(function () {
          this.price = document.querySelector('#mint2').innerHTML
          return this.price
        })
      case1.should.equal('80')
    })
    it('ศิลาอาถรรพ์ จำนวน 2 เล่ม, ห้องแห่งความลับ จำนวน 2 เล่ม, อัซคาบัน จำนวน 2 เล่ม >> ส่วนลด=120 บาท', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(1000)
        .click('#b1')
        .click('#b1')
        .click('#b2')
        .click('#b2')
        .click('#b3')
        .click('#b3')
        .evaluate(function () {
          this.price = document.querySelector('#mint2').innerHTML
          return this.price
        })
      case1.should.equal('120')
    })
    it('ศิลาอาถรรพ์ จำนวน 3 เล่ม, ห้องแห่งความลับ จำนวน 3 เล่ม, อัซคาบัน จำนวน 2 เล่ม >> ส่วนลด=140 บาท', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(1000)
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b2')
        .click('#b2')
        .click('#b2')
        .click('#b3')
        .click('#b3')
        .evaluate(function () {
          this.price = document.querySelector('#mint2').innerHTML
          return this.price
        })
      case1.should.equal('140')
    })
    it('ศิลาอาถรรพ์ จำนวน 4 เล่ม, ห้องแห่งความลับ จำนวน 3 เล่ม, อัซคาบัน จำนวน 3 เล่ม >> ส่วนลด=180 บาท', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(1000)
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b2')
        .click('#b2')
        .click('#b2')
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .evaluate(function () {
          this.price = document.querySelector('#mint2').innerHTML
          return this.price
        })
      case1.should.equal('180')
    })
    it('ศิลาอาถรรพ์ จำนวน 4 เล่ม, ห้องแห่งความลับ จำนวน 4 เล่ม, อัซคาบัน จำนวน 3 เล่ม >> ส่วนลด=200 บาท', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(1000)
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b2')
        .click('#b2')
        .click('#b2')
        .click('#b2')
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .evaluate(function () {
          this.price = document.querySelector('#mint2').innerHTML
          return this.price
        })
      case1.should.equal('200')
    })
    it('ศิลาอาถรรพ์ จำนวน 4 เล่ม, ห้องแห่งความลับ จำนวน 4 เล่ม, อัซคาบัน จำนวน 2 เล่ม , ถ้วยอัคนี จำนวน 1 เล่ม >> ส่วนลด=220 บาท', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(1000)
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b2')
        .click('#b2')
        .click('#b2')
        .click('#b2')
        .click('#b3')
        .click('#b3')
        .click('#b4')
        .evaluate(function () {
          this.price = document.querySelector('#mint2').innerHTML
          return this.price
        })
      case1.should.equal('220')
    })
    it('ศิลาอาถรรพ์ จำนวน 4 เล่ม, ห้องแห่งความลับ จำนวน 4 เล่ม, อัซคาบัน จำนวน 4 เล่ม >> ส่วนลด=240 บาท', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(1000)
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b2')
        .click('#b2')
        .click('#b2')
        .click('#b2')
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .evaluate(function () {
          this.price = document.querySelector('#mint2').innerHTML
          return this.price
        })
      case1.should.equal('240')
    })
    it('ศิลาอาถรรพ์ จำนวน 4 เล่ม, ห้องแห่งความลับ จำนวน 4 เล่ม, อัซคาบัน จำนวน 3 เล่ม, ถ้วยอัคนี จำนวน 1 เล่ม >> ส่วนลด=260 บาท', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(1000)
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b2')
        .click('#b2')
        .click('#b2')
        .click('#b2')
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .click('#b4')
        .evaluate(function () {
          this.price = document.querySelector('#mint2').innerHTML
          return this.price
        })
      case1.should.equal('260')
    })
    it('ศิลาอาถรรพ์ จำนวน 4 เล่ม, ห้องแห่งความลับ จำนวน 3 เล่ม, อัซคาบัน จำนวน 3 เล่ม, ถ้วยอัคนี จำนวน 2 เล่ม >> ส่วนลด=300 บาท', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(1000)
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b2')
        .click('#b2')
        .click('#b2')
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .click('#b4')
        .click('#b4')
        .evaluate(function () {
          this.price = document.querySelector('#mint2').innerHTML
          return this.price
        })
      case1.should.equal('300')
    })
    it('ศิลาอาถรรพ์ จำนวน 4 เล่ม, ห้องแห่งความลับ จำนวน 3 เล่ม, อัซคาบัน จำนวน 3 เล่ม, ถ้วยอัคนี จำนวน 3 เล่ม >> ส่วนลด=360 บาท', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(1000)
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b2')
        .click('#b2')
        .click('#b2')
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .click('#b4')
        .click('#b4')
        .click('#b4')
        .evaluate(function () {
          this.price = document.querySelector('#mint2').innerHTML
          return this.price
        })
      case1.should.equal('360')
    })
    it('ศิลาอาถรรพ์ จำนวน 4 เล่ม, ห้องแห่งความลับ จำนวน 4 เล่ม, อัซคาบัน จำนวน 3 เล่ม, ถ้วยอัคนี จำนวน 3 เล่ม >> ส่วนลด=380 บาท', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(1000)
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b2')
        .click('#b2')
        .click('#b2')
        .click('#b2')
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .click('#b4')
        .click('#b4')
        .click('#b4')
        .evaluate(function () {
          this.price = document.querySelector('#mint2').innerHTML
          return this.price
        })
      case1.should.equal('380')
    })
    it('ศิลาอาถรรพ์, ห้องแห่งความลับ, อัซคาบัน, ถ้วยอัคนี, นกฟีนิกซ์, เจ้าชายเลือดผสม, เครื่องรางยมทูต ภาคละ 1 เล่ม >> ส่วนลด=420 บาท', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(1000)
        .click('#b1')
        .click('#b2')
        .click('#b3')
        .click('#b4')
        .click('#b5')
        .click('#b6')
        .click('#b7')
        .evaluate(function () {
          this.price = document.querySelector('#mint2').innerHTML
          return this.price
        })
      case1.should.equal('420')
    })
    it('ศิลาอาถรรพ์, ห้องแห่งความลับ, อัซคาบัน, ถ้วยอัคนี, นกฟีนิกซ์, เจ้าชายเลือดผสม, เครื่องรางยมทูต ภาคละ 2 เล่ม >> ส่วนลด=840 บาท', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(1000)
        .click('#b1')
        .click('#b2')
        .click('#b3')
        .click('#b4')
        .click('#b5')
        .click('#b6')
        .click('#b7')
        .click('#b1')
        .click('#b2')
        .click('#b3')
        .click('#b4')
        .click('#b5')
        .click('#b6')
        .click('#b7')
        .evaluate(function () {
          this.price = document.querySelector('#mint2').innerHTML
          return this.price
        })
      case1.should.equal('840')
    })
    it('ศิลาอาถรรพ์, ห้องแห่งความลับ, อัซคาบัน, ถ้วยอัคนี, นกฟีนิกซ์, เจ้าชายเลือดผสม, เครื่องรางยมทูต ภาคละ 3 เล่ม >> ส่วนลด=1260 บาท', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(1000)
        .click('#b1')
        .click('#b2')
        .click('#b3')
        .click('#b4')
        .click('#b5')
        .click('#b6')
        .click('#b7')
        .click('#b1')
        .click('#b2')
        .click('#b3')
        .click('#b4')
        .click('#b5')
        .click('#b6')
        .click('#b7')
        .click('#b1')
        .click('#b2')
        .click('#b3')
        .click('#b4')
        .click('#b5')
        .click('#b6')
        .click('#b7')
        .evaluate(function () {
          this.price = document.querySelector('#mint2').innerHTML
          return this.price
        })
      case1.should.equal('1260')
    })
  })
})
