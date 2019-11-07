// Description:
// In this lab you’ll use a set to remove duplicates
// Provided:
// A Moch / Chai test file to check your results
// Instructions:
// Write a function called removeDups(numList) that takes an Array which may contain diplicates, 
// and then returns a new Array with the duplicates removed.


function removeDups(numList){
    let myset= new Set();
    for(let num of numList){
        myset.add(num);
    }
    let newNumList=[];
    for(let key of myset){
        newNumList.push(key);
    }
    return newNumList;
}

let numList=[3,2,3,4,2,1,4,5,6,5,7,5,6,3];
console.log(removeDups(numList));
