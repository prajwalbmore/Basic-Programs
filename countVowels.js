function countVowels(str){
    let vowles = 'aeiouAEIOU';
    let count = 0;
    for(i=0;i<=str.length;i++){
        for(j = 0 ;j<vowles.length;j++){
            if(str[i] === vowles[j]){
                count++;
            }
        }
    }
    return console.log(count);
}

let str = 'prajwal'
countVowels(str)