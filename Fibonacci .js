function generateFibonacci(n) {
    let fib = [0,1];
    for(i=2;i<n;i++){
        fib.push(fib[i-1] + fib[i-2]);
    }
    return console.log(fib);
  }
  generateFibonacci(10);
