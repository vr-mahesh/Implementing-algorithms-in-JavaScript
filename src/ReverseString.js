//Reverse String method taking input string str
/**
 *
 * @param str - String which has to be registered
 */
var  reverseString =(str) => {
    var strlength =str.length;
    let reverseStr ="";
//Parse from last character of the string till 0th element and keep pushing characters into a var 
    for(i=strlength-1;i>=0;i--){
        reverseStr+=str[i];
    }
    console.log(" Reverse string is " + reverseStr );
}
/**
 *  calling reverse string method
 */
reverseString("Hello world");