// function factorialRecursive(n) {
//     if (n === 0) return 1;
//     return n * factorialRecursive(n - 1);
//   }
//   console.log(factorialRecursive(4));

function factorial(n){
    let result = 1;
    for(i = 2 ; i <= n ;i++){
        result *= i;
    }
    return console.log(result);
}
factorial(6)
  