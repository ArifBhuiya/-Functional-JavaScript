var arr=[1,3,4,55,6,7,];

 function cbf(a){
     console.log(a);
    
   }

 arr.forEach(cbf);

/********Exam two*********/

var arra = [4,5,6,7,3,5,6,];


arra.forEach(function(a){
    console.log(a);
    
});

/*********Exam Three ******/

function caller(){
    return function(name){
        return 'Caller Calling you  '+ name;


    }
    
}
//  var x = caller();
// var y = x('Arif Bhuiy..');
// y;

//  var z = x('This is function..');
//  z;


var a = caller()('Twinkle cats..');

a;
