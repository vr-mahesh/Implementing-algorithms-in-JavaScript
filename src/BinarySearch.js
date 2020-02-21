//Array to be searched from.
var array=[-1,0,3,4,7,9,11111,34566,78888];
// Element to be searched for.
var searchElement = 34566;
/**
 *
 * @param array  - array to be searched from
 * @param searchElement - element to be searched
 * @param rightvalue - right most index of array
 * @param leftvalue - right most index of array
 * @param callback - callback function to show search was succesfully.
 */
var binarySearchAlgo = (array,searchElement,rightvalue,leftvalue,callback)=> {
    var mid_value="";

    mid_value = Math.round(leftvalue + (rightvalue- leftvalue)/2);
// Checking if search element is equal to array[mid value]
    if(searchElement == array[mid_value]){
        callback();
        console.log("Searched element :"+searchElement +" has index of "+mid_value +" and denoted by array["+mid_value+"]" );
    }
    else if(searchElement < array[mid_value]){
        //Decrementing the value of rightvalue if searchElement is less than array[mid_value]
        rightvalue = mid_value - 1;
        // Calling recursively binarySearchAlgo to continue with search
        binarySearchAlgo(array,searchElement,rightvalue,leftvalue,callback);
    }
    else if(searchElement > array[mid_value]){
        //Incrementing the value of leftvalue if searchElement is greater than array[mid_value]
        leftvalue = mid_value + 1;
        // Calling recursively binarySearchAlgo to continue with search
        binarySearchAlgo(array,searchElement,rightvalue,leftvalue,callback);
    }
}
/**
 *  callback function to show search was succesfully.
 */
//callback function to show element search success.
var callback =() =>{
    console.log("Element is searched successfully!!");
}
// Calling Binary Search algo function first time by passing leftvalue as 0 and rightvalue as maximum index number of array.
binarySearchAlgo(array,searchElement,array.length-1,0,callback);
