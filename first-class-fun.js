// A funtion can be storted in a variable...

function sayName(name){
  return 'Hello, ' + name;

}

var hello = sayName;
var fun = sayName();

console.log(hello);
console.log(fun);
