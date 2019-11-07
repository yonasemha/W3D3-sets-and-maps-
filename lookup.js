// Write a function called checkForSum(numList, numZ) which does the following: it
//  there are two elements numX, numY in the list whose sum is numZ it should return true, 
// otherwise false.
// Your implementation is not allowed to use nested loops. Instead you should be able
//  to obtain the correct return value by doing a single scan of the input list.
//   Hint: use Map lookup.

function checkForSum(numList, numZ) {
    let sum = 0;
    for (let key of numList.keys()) {
        sum += sum + key;
    }
    if (sum === numZ) {
        return true;
    } else {
        return false;
    }

}