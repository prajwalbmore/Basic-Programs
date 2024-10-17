function moveZeroToEnd(arr) {
    let nonZeroIndex = 0;

    for(i = 0;i < arr.length; i++){
        if (arr[i] !== 0 ) {
            [arr[nonZeroIndex],arr[i]] = [arr[i],arr[nonZeroIndex]];
            nonZeroIndex++;
        }
    }
    return console.log(arr);
    
}
let arr = [0,8,0,1,2,0,8]
moveZeroToEnd(arr)