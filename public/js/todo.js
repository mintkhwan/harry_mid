/*global angular*/
angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList = this
    todoList.mint = 'Select Book'
    todoList.store = []
    todoList.promo = []
    todoList.discount = 0
    todoList.page = false
    todoList.show = []
    todoList.addBook = function (ep, name, price) {
      todoList.page = true
      if (checkStore(todoList.store, ep)) { // ถ้าใน store มี ep ซ้ำจะบวกค่าจำนวนหนังสือแต่ละ ep
        var index = addAmount(todoList.store, ep)
        todoList.store[index].amount += 1 // จะ +1
      } else { // จะ push ค่าที่ไม่ซ้ำเก็บเอาไว้
        var dataBook = {
          ep: ep,
          name: name,
          price: price,
          amount: 1
        }
        todoList.store.push(dataBook)
      }
      if (checkStore(todoList.show, ep)) { // ถ้าใน store มี ep ซ้ำจะบวกค่าจำนวนหนังสือแต่ละ ep
        var index_show = addAmount(todoList.show, ep)
        todoList.show[index_show].amount += 1 // จะ +1
      } else { // จะ push ค่าที่ไม่ซ้ำเก็บเอาไว้
        var data_show = {
          ep: ep,
          name: name,
          price: price,
          amount: 1
        }
        todoList.show.push(data_show)
      }
      todoList.store.sort(function (a, b) { // เรียงค่ามาก > น้อย
        if (a.amount > b.amount) return -1
        if (a.amount < b.amount) return 1
        return 0
      })
      var amount = []
      for (var i = 0; i < todoList.store.length; i++) {
        if (typeof todoList.store[i].amount !== 'undefined') { // ถ้า amount ก็จะไม่เอาค่า
          amount.push(todoList.store[i].amount)
        }
      }
      todoList.promo = amount
      cal(todoList.promo)
    }
    todoList.bill = function () {
      var total = 0
      for (var i = 0; i < todoList.store.length; i++) {
        total = todoList.store[i].amount + total
      }
      return total
    }
    function cal (data) {
      var countbook = 0 // ตัวนับจน.หนังสือ
      todoList.discount = 0 // ส่วนลด
      var max
      for (var i = 0; i <= data.length; i++) { // วน col [A,B,C]
        for (var j = 0; j < data.length; j++) { // วน row [A,B,C] เพื่อเก็บ count ไว้ check
          if (data[j] > 0) {
            countbook++
            if (max < countbook) {
              max = countbook
            }
          }
        }
        if (countbook === 2) { // คิดส่วนลด
          todoList.discount += 20
        } else if (countbook === 3) {
          todoList.discount += 60
        } else if (countbook === 4) {
          todoList.discount += 120
        } else if (countbook === 5) {
          todoList.discount += 200
        } else if (countbook === 6) {
          todoList.discount += 300
        } else if (countbook === 7) {
          todoList.discount += 420
        }
        for (var k = 0; k < data.length; k++) {
          data[k] -= 1
        }
        countbook = 0
      }
      console.log('todoList.discount ' + todoList.discount)
    }
    var checkStore = function (store, ep) { // จะเช็คค่าใน arr store ว่ามีหนังซื้อไหม
      for (var i = 0; i < store.length; i++) { // ใน store มีกี่ ep ที่ซ้ำกัน
        if (store[i].ep === ep) {
          return true
        }
      }
    }
    var addAmount = function (store, ep) {
      for (var i = 0; i < store.length; i++) {
        if (store[i].ep === ep) {
          return i // return เพื่อจะหาว่ามันซ้ำกันที่ arr ไหน
        }
      }
    }
    todoList.delBook = function () {
      console.log('yes')
    }
  })
