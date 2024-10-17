function gcd(a,b){
    while(b !== 0){
        let reminder = a % b;
        a = b;
        b = reminder;
    }
    return a   
}
let a = 50 ,b = 100 ;
console.log(`GCD of ${a} and ${b} is :-`,gcd(a,b));