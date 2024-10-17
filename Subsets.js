function Subsets(arr) {
    let subsets = [[]];
    for (let num of arr) {
      let len = subsets.length;
      for (let i = 0; i < len; i++) {
        subsets.push([...subsets[i], num]);
      }
    }
    return console.log(subsets);
    ;
  }
  
let arr = [1,2,3,4]
Subsets(arr);