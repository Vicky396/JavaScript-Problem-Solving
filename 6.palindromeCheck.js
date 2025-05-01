// Write a function to determine whether a given string a palindrome or not.
//  A palindrome is a word, phrase, number, or other sequence of characters 
// that reads the forward and backward, ignoring spaces, punctuation,capitalization.

//
// Constraints:
//
// The input string may contain letters, digits, spaces,
// punctuation, and special characters.
// The function should be case-insensitive, meaning
// "Racecar" and "racecar" should be considered the same.
// Ignore spaces, punctuation, and special characters when
// determining if a string is a palindrome.
// The function should return true if the input string is a
// palindrome and false otherwise.

const isPalindrome = (str)=>{
    str=str.toLowerCase().replace(/\W/g,'');
    console.log(str);
    let j=str.length-1;
    for(let i=0;i<str.length/2;i++){
            if (str[i]!=str[j]){
                return false;
            }
            j--;
        }
    return true;
} 




console.log(isPalindrome ("A man, a plan, a canal,  Panama")); // Output: true
console.log(isPalindrome ("racecar")); // Output: true
console.log(isPalindrome ("hello")); // Output: false