//Immediate invoked function expression

(function(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      console.log(i); 
    }
  }
})(0, 10);

/*

Difference Between the Normal Function and IIFE

Normal Function: You define it first and then call it whenever you need to execute the code inside it. You can invoke it multiple times.

function myFunction() {
}
myFunction();
The function can be called at a later time, possibly multiple times


IIFE: It is executed immediately after its creation, and it cannot be invoked again later. It runs exactly once—right after its definition.

(function() {
  
})();
  

*/
