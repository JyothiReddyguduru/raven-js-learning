//scenario1();
//scenario2() ;
//scenario3();

function scenario3() {
  function checkHoisting() {
    console.log(foo); // ReferenceError
    let foo = 'Foo';
    console.log(foo); // Foo
  }

  checkHoisting();
}

function scenario2() {
  function run() {
    console.log(foo); // undefined
    var foo = 'Foo';
    console.log(foo); // Foo
  }

  run();
}

/***
 * JS execution context
 */
function scenario1() {
  hello();

  function hello() {
    //var i, var a are function scoped
    //let is block scoped
    for (var i = 0; i < 1; i++) {
      var a = 1; //a scope is function scope within hello
      let b = 2; //b scope is inside for loop - block scope
      console.log(a);
      console.log(b);
      console.log(i);
    }

    console.log(a);
    //console.log(b); this line will throw error that b is not defined
    console.log(i);
  }

  //console.log(a);//Error : a is not defined
  //console.log(b);//b is not defined
  //console.log(i); //i is not defined
}
