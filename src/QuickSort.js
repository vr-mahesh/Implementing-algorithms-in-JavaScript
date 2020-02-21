
array=[4444,-909,-1898,9999,27,1,4,45]
/**
 *
 * @param array  - array
 * @param leftIndex - left most index of array
 * @param rightIndex - right most index of array
 * @returns {*}
 */
//This is important function which compares the pivot value with each element from start and swaps it if its value  smaller than pivot and finally places pivot in the center so that we get sorted array section on either side of pivot.
var partition =(array,leftIndex,rightIndex) =>{
    let pivot =array[rightIndex];
    let pIndex=leftIndex;
    for(;leftIndex<array.length;leftIndex++){
        if(array[leftIndex]< pivot){

            let temp = array[leftIndex];
            array[leftIndex] = array[pIndex];
            array[pIndex] = temp;
            pIndex++;
        }
    }
    let temp = array[rightIndex];
    array[rightIndex] = array[pIndex];
    array[pIndex] = temp;

    return pIndex;
}
/**
 *
 * @param array
 * @param leftIndex - left most index of array
 * @param rightIndex - right most index of array
 */
var quickSort =(array,leftIndex,rightIndex)=> {
    // Checking whether right most index value is always less than left most index value
    if(leftIndex<rightIndex){
        let pIndex = partition(array,leftIndex,rightIndex);
// Calling quickSort function to sort the rest of the array on either side of the pivot (both left and right)
        quickSort(array,leftIndex,pIndex-1);
        quickSort(array,pIndex+1,rightIndex);
    }
}
/**
 * left index value = 0(starting element)
 * right index value = array.length-1(last element)
 */
//passing rightIndex as maximum array index and leftIndex as 0
quickSort(array,0,array.length-1);
console.log("Sorted array is :" + array);
