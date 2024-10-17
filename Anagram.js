// function areAnagrams(str1, str2) {
//     if (str1.length !== str2.length) return console.log('The strings are not Anagarms');
//     let count = {};
    
//     for (let char of str1) {
//       count[char] = (count[char] || 0) + 1;
//     }
    
//     for (let char of str2) {
//       if (!count[char]) return console.log('The strings are not Anagarms',count);
//       count[char]--;
//     }
  
//     return console.log('The strings are Anagarms',count);
//   }
// let str1 = 'listen'
// let str2 = 'silene'
// areAnagrams(str1,str2)  

function anagram(str1,str2){
  const sortedStr1 = str1.split('').sort().join('')
  const sortedStr2 = str2.split('').sort().join('')
  if (sortedStr1 === sortedStr2) {
    return console.log('Strings are Anagram');
    
  }
  return console.log('Strings are not Anagrams');
  
}
let str1 = 'listen'
let str2 = 'silent'
anagram(str1,str2)