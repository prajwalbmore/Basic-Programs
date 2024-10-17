function missingNumber(arr){
    const n = arr.length + 1;

    let totalSum = 0;
    for( i = 1; i <= n ; i++){
        totalSum += i;
    }

    let arraySum = 0;
    for ( i = 0; i < arr.length; i++){
        arraySum += arr[i];
    }

    return totalSum - arraySum  
}

const arr = [1,3,4,5];
console.log("Missing number is :-",missingNumber(arr));
