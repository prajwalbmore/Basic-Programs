function charCount(str){
    let charCount = {};
    for(i=0;i<str.length;i++){
        let char = str[i];

        if(charCount[char]){
            charCount[char]++;
        }else{
            charCount[char] = 1;
        }
    }
    return console.log(charCount);
}
let str = 'Prajwal'
charCount(str)