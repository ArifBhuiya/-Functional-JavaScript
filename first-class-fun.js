// A funtion can be storted in a variable...

function sayName(name){
  return 'Hello , How are you ? ' + name;

}

var hello = sayName;
var anotherhello = hello;

// var fun = sayName('Arif Bhiuya');

// console.log(hello);

// var result = hello('Arif Buiya');
// console.log(result);
// var anotherhello = hello;
// console.log(anotherhello('Arif Bhuiya'));




// A function can be stored in an array..

//  var arr=[1,2,3,4,5,anotherhello];
//  arr.push(hello);
//  console.log(arr);
 




// A function can be stored in an Object field or property..

// var person = {
//   name: 'Arif Bhiuya',
//   age: 24,
//   fun:hello,
//   printa: function(){
//     console.log('Hi');
    
//   }

// }
// person;



// We can create function as needed..

// var sum = 10 + (function(){return 50})();
// sum



// We can pass afunction as an arguments..

function Wow(name,fun){
 return fun(name);

}

var result = Wow('Arif Bhuiya..',sayName);

console.log(result);

// we can return a function from another function..

function base(b){
  return function(n){
    var result = 1;

    for (var i = 0; i<b; i++){
       result *=n;
    }
    return result;
  }
}

//  var power = base(3);
//  var result = power(5);
//  result;

var result = base(3)(5);
result;
