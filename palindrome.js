function panildrome (str){
    let rev = '';
    for ( i = str.length - 1 ; i >= 0; i--){
        rev += str[i];
    }
    if(str === rev){
        console.log('String is Palindrome');
    }else{
        console.log('String is not Palindrome');
    }
}
let str = 'nitin';
panildrome(str)