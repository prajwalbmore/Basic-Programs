function maximum(array){
    let max = array[0];
    for( i = 0 ; i <= array.length ; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return console.log(max);    
}
let array = [5,9,4,1,0]
maximum(array);