/*global angular*/
angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList = this
    todoList.mint = 'mint'
    todoList.store = []
    todoList.addBook = function (ep, name, price) {
      if (checkStore(todoList.store, ep)) { // ถ้าใน store มี ep ซ้ำจะบวกค่าจำนวนหนังสือแต่ละ ep
        var index = addAmount(todoList.store, ep)
        todoList.store[index].amount += 1 // จะ +1 ไป
      } else { // จะ push ค่าที่ไม่ซ้ำเก็บเอาไว้
        var dataBook = {
          ep: ep,
          name: name,
          price: price,
          amount: 1
        }
        todoList.store.push(dataBook)
      }
      console.log(todoList.store)
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
  })
