function secondLargest(arr){
    let max = null;
    let secondMax = null;

    for(i=0;i<=arr.length;i++){
        if(max === null || arr[i]>max){
            secondMax = max;
            max = arr[i]
        }else if(arr[i]>secondMax && arr[i] !== max){
            secondMax = arr[i];
        }
    }
    return console.log("second largest number is :-",secondMax);
}

let arr = [0,3,1,2,5,10]
secondLargest(arr);