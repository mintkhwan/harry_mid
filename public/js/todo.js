/*global angular*/
angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList = this
    todoList.mint = 'Select Book'
    todoList.store = []
    todoList.promo = []
    todoList.discountTotal = 0
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
      var amount = []
      for (var i = 0; i < todoList.store.length; i++) {
        if (typeof todoList.store[i].amount !== 'undefined') { // ถ้า amount ก็จะไม่เอาค่า
          amount.push(todoList.store[i].amount)
        }
      }
      todoList.promo = amount
      // cal(todoList.promo)
      var book = todoList.store
      todoList.discountTotal = todoList.discount(book)
      // console.log(todoList.discountTotal)
      console.log(book)
    }
    todoList.bill = function () {
      var total = 0
      for (var i = 0; i < todoList.store.length; i++) {
        total = todoList.store[i].amount + total
      }
      return total
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
    todoList.delBook = function (data, index) {
      // var index = todoList.promo.indexOf(data)
      console.log('ช่องที่เราต้องการจะลบ' + index)
      todoList.promo.splice(index, 1)
      todoList.show.splice(index, 1)
      todoList.store.splice(index, 1)
      if (todoList.show.length === 0) {
        todoList.page = false
      }
      var book = todoList.store
      todoList.discountTotal = todoList.discount(book)
      var amount = []
      for (var i = 0; i < todoList.store.length; i++) {
        if (typeof todoList.store[i].amount !== 'undefined') {
          amount.push(todoList.store[i].amount)
        }
      }
      todoList.promo = amount
    }
    todoList.subbutton = function (show, $index) {
      // console.log('sub')
      subRepeat(show.ep, show.name, show.price)
    }
    function subRepeat (ep, name, price) {
      todoList.page = true
      if (checkStore(todoList.store, ep)) { // ถ้าใน store มี ep ซ้ำจะบวกค่าจำนวนหนังสือแต่ละ ep
        var index = addAmount(todoList.store, ep)
        if (todoList.store[index].amount !== 0) {
          todoList.store[index].amount -= 1 // จะ +1
        }
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
        // todoList.show[index_show].amount += 1 // จะ +1
        if (todoList.show[index_show].amount !== 0) {
          todoList.show[index_show].amount -= 1
        }
      } else { // จะ push ค่าที่ไม่ซ้ำเก็บเอาไว้
        var data_show = {
          ep: ep,
          name: name,
          price: price,
          amount: 1
        }
        todoList.show.push(data_show)
      }
      var amount = []
      for (var i = 0; i < todoList.store.length; i++) {
        if (typeof todoList.store[i].amount !== 'undefined') { // ถ้า amount ก็จะไม่เอาค่า
          amount.push(todoList.store[i].amount)
        }
      }
      todoList.promo = amount
    }
    todoList.addbutton = function (show, $index) {
      addRepeat(show.ep, show.name, show.price)
    }
    function addRepeat (ep, name, price) {
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
      var amount = []
      for (var i = 0; i < todoList.store.length; i++) {
        if (typeof todoList.store[i].amount !== 'undefined') { // ถ้า amount ก็จะไม่เอาค่า
          amount.push(todoList.store[i].amount)
        }
      }
      todoList.promo = amount
    // cal(todoList.promo)
    }
    var filterData = function (array) {
      return array.filter((element) => element.amount !== 0)
    }
    todoList.discount = function (book) {
      var items = book.map((obj) => {
        return { amount: obj.amount, price: obj.price }
      })
      var totalDis = 0
      while (items.length > 1) {
        var sumprice = items.reduce((sum, item) => sum + item.price, 0)
        totalDis += ((items.length - 1) / 10) * sumprice
        items = items.map((obj) => {
          return { amount: obj.amount - 1, price: obj.price }
        })
        items = filterData(items)
      }
      console.log(totalDis)
      return totalDis
    }
  })
