/*global angular*/
angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList = this
    todoList.mint = 'mint'
    todoList.addBook = function (ep, name, price) {
      console.log(ep + name + price)
    }
  })
