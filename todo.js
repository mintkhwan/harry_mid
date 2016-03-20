/*global angular*/
angular.module('todoApp', [])
 .controller('TodoListController', function () {
   var todoList = this
   todoList.books = [
     {
       id: 1,
       pic: 'pic/h1.jpg',
       name: 'แฮร์รี่ กับศิลาอาถรรพ์',
       price: 100.00
     }, {
       id: 2,
       pic: 'pic/h2.jpg',
       name: 'แฮร์รี่ กับห้องแห่งความลับ',
       price: 100.00
     }, {
       id: 3,
       pic: 'pic/h3.jpg',
       name: 'แฮร์รี่ กับนักโทษแห่งอัซคาบัน',
       price: 100.00
     }, {
       id: 4,
       pic: 'pic/h4.jpg',
       name: 'แฮร์รี่ กับถ้วยอัคนี',
       price: 100.00
     }, {
       id: 5,
       pic: 'pic/h5.jpg',
       name: 'แฮร์รี่ กับภาคีนกฟีนิกซ์',
       price: 100.00
     }, {
       id: 6,
       pic: 'pic/h6.jpg',
       name: 'แฮร์รี่ กับเจ้าชายเลือดผสม',
       price: 100.00
     }, {
       id: 7,
       pic: 'pic/h7.jpg',
       name: 'แฮร์รี่ กับเครื่องรางยมทูต',
       price: 100.00
     }
   ]
 })
