function bubbleSort(arr){
    let n = arr.length ;

    for (i=0;i<n-1;i++){
        for(j=0;j<n-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return console.log(arr);
    
}
let arr = [8,2,5,1,0]
bubbleSort(arr)