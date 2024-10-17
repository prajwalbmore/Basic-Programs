function isPrime(num){
    if(num<=1){
        return console.log(`${num} is not a prime number`);
    }

    for(i=2;i<num;i++){
        if(num % i == 0){
            return console.log(`${num} is not a prime number`);
        }
    }
    return console.log(`${num} is a prime number`)
}
let num = 10;
isPrime(num)