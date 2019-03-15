// function hello(name){
//     print(name);
//     print('somting else');
// }

// function print(args){
//     console.log(args);
    

// }

// hello('Hi, How are you');


// function hello(name,print){
//      print(name);
    
// }

// hello('Arif Bhuiya', print);

// function print(args){
//     console.log(args);
    
// }

// hello('Arif Bhuiya',function(name){
//     console.log('Hello ' + name);
    

// });

// hello('Arif Bhuiya',function(name){
//     console.log('Hi How are you? ' + name);
    
// });
// hello('Twinkle cats ',function(name){
//     console.log('Length of ' + name + 'is : ' + name.length );
    
// });



// var me ={
//     name:'Arif Bhuiya',
//     age:24,
//     email:'arif@gmail.com'
// }
// function printmySelf(person , callback){
//      console.log('person:'+ person.name + ' ('+ person.age + ')');
//      if(person.age >= 18){
//          callback(person.email);

//      }else{
//          console.log('you are too little');
         
//      }
     
// }

// printmySelf(me,function(email){
//    console.log('email sent  to ' + email );
   
// });



function print(data,callback,callback1){
    console.log('Original data : '+ data );
    callback(data);
    callback1(data);
    

}
print('Twinkle Cats is Awesome Channel for Beginners',function(data){
    var data = data.toUpperCase();

    console.log('Uppercase : ' + data);
    
},function(data){
    var data = data.toLowerCase();

    console.log('Uppercase : ' + data);
    console.log('Length : ' + data.length );
    
});
