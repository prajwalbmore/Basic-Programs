function intersection(arr1,arr2){
    let inter = [];
    let visited = {};
    for (i = 0; i < arr1.length; i++){
        for(j = 0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                if(!visited[arr1[i]]){
                inter.push(arr1[i]);
                visited[arr1[i]] = true
                }
            }
        }
    } 
    return console.log("Intersection of given 2 arrays is :",inter);
}
let arr1 = [1,2,3,4,6];
let arr2 = [3,4,5,6,2,6];
intersection(arr1,arr2)