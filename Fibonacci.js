function Fibonacci(n){
  const fb = [];
  fb[0] = 0;
  fb[1] = 1;
   for(let i = 2; i <= n; i++){
     fb[i] = fb[i-1] + fb[i-2];
   }
  return fb;  
}

document.write(Fibonacci(10).join(', ')); // Join the array elements with a comma and write to the document
