// Write a function called checkForSum(numList, numZ) which does the following: it
//  there are two elements numX, numY in the list whose sum is numZ it should return true, 
// otherwise false.
// Your implementation is not allowed to use nested loops. Instead you should be able
//  to obtain the correct return value by doing a single scan of the input list.
//   Hint: use Map lookup.

function checkForSum(numList, numZ) {
    let myMap = new Map();
    for (let num of numList) {
        myMap.set(num, true);
    }
    for(let num of numList){
       if(myMap.get(numZ -num)){
           return true;
       }
    }
    return false;
}