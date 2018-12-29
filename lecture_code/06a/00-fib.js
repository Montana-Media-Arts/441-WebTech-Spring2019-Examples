function fib(num) {
  // console.log(num);
  if ( num === 0 ) {
    return 0;
  } else if ( num === 1 ) {
    return 1;
  } else {
    return fib( num - 1 ) + fib( num - 2 );
  }
};

console.log( `final number is ${fib(process.argv[2])}` );
