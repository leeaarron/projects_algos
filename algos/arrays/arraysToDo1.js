//push front
//Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function pushFront(arr, num) {
    for (var idx = arr.length - 1; idx >= 0; idx--) {
        arr[idx+1] = arr[idx];
    }
    arr[0] = num;
    return arr;
}

console.log(pushFront([2,3,4], 1))


//pop front
//Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().


function popFront(arr) {
    var newArr = arr[0];
    for (var idx = 1; idx < arr.length; idx++) {
        arr[idx-1] = arr[idx];
    }
    arr.pop(); 
    return newArr;
}

console.log(popFront([1,2,3,4]))

//insert at
//Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(arr, num, idx) {
    for (var i = arr.length - 1; i >= idx; i--) {
        arr[i+1] = arr[i];
    }
    arr[idx] = num; 
    return arr;
}

console.log(insertAt([1,2,3], 5, 0))


//Remove At (Bonus Challenge)
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
// function removeAt(arr, ind) {
//     ind = Math.floor(ind); // Rounds the index down
//     // If index is out of bounds
//     if (ind >= arr.length || ind < 0) {
//         return null; // Return an arbitrary value
//     }
//     var returnVal = arr[ind]; // The value we will return
//     // Loop through the array - starting at the index after the one whose value will be removed
//     for (var i = ind + 1; i < arr.length; i++) {
//         arr[i-1] = arr[i];
//     }
//     arr.pop(); // Remove the last value
//     // arr.length--; // Alternate way to remove last value
//     return returnVal;
// }


// Swap Pairs (Bonus Challenge)
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.
// function swapPairs(arr) {
//     for (var i = 0; i < arr.length - 1; i += 2) {
//         // Swap pairs:
//         var temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//     }
// }


// Remove Duplicates (Bonus Challenge)
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

// First version with nested loops
// function removeDupesV1(arr) {
//     for (var i = 0; i < arr.length - 1; i++) {
//         if (arr[i+1] == arr[i]) { // If the value ahead is a duplicate of the current value at index i
//             // Remove that value and move everything afterwards to the left an index
//             // Remove the last item in the array
//             while (arr[i+1] == arr[i]) {
//                 removeAt(arr,i+1);
//             }
//         }
//     }
// }

// /* Changing the length of the array at will - useful for second version of remove duplicates */

// // var x1 = [3, 'hello', 10.5];
// // console.log(x1.length);
// // x1.length += 2;
// // console.log(x1);
// // console.log(x1[3]);
// // x1.length -= 3;
// // console.log(x1);
// // x1.length++;
// // console.log(x1);

// // x1[10] = 5;
// // console.log(x1)

// // More efficient version with only one for loop
// function removeDupesV2(arr) {
//     if (arr.length <= 1) { // If array is empty or has only one value, no duplicates possible
//         return;
//     }
//     var lastUniqueVal = arr[0];
//     var nextUniqueInd = 1; // The index for where the next unique value will be put in the array
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] != lastUniqueVal) {
//             lastUniqueVal = arr[i];
//             arr[nextUniqueInd] = arr[i];
//             nextUniqueInd++;
//         }
//     }
//     arr.length = nextUniqueInd; // Remove the duplicates
// }
// Second: Solve this without using any nested loops.



//function pushToFront(arr, val) {
    // Goal: Put "val" at the beginning of the array "arr", move everything else up one index
    // Need: temp variables for holding values
//     var temp1 = arr[0], temp2 = arr[1];
//     // Loop for moving values to the right
//     for (var i = 0; i < arr.length && temp1 != undefined; i++) {
//         arr[i+1] = temp1;
//         temp1 = temp2;
//         temp2 = arr[i+2];
//     }
//     arr[0] = val; // Inserts the value at the start of the array
// }