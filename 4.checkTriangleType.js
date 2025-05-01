//*.
//* Interview Question:
//*.
//? Write a function called checkTriangleType that takes three parameters lengths of the sides of a triangle. The function should return a of triangle: "equilateral", "isosceles", or "scalene".
// console.log(checkTriangleType(3, 3, 3)); // Output: "equilateral"
// console.log(checkTriangleType(3, 4, 3)); // Output: "isosceles"
// console.log(checkTriangleType(5, 8, 6)); // Output: "scalene
//todo The function should adhere to the following rules:
//? If all three sides are of equal length, return "equilateral".
//? If only two sides are of equal length, return "isosceles".
//? If all three sides have different lengths, return "scalene".

// My approach
const checkTriangleType1 =(p1,p2,p3)=>{
    if(p1===p2 && p1===p3){
        return "Equilateral";
    }
    else if(p1!=p2 && p2!=p3 && p3!=p1){
        return "Scalene"
    }
    else{
        return "Isoceles";
    }
}

// Solution
const checkTriangleType2 =(p1,p2,p3)=>{
    if(p1===p2 && p1===p3){
        return "Equilateral";
    }
    else if(p1===p2 || p2===p3 || p3===p1){
        return "Scalene"
    }
    else{
        return "Isoceles";
    }
}

console.log(checkTriangleType1(3, 3, 3)); // Output: "equilateral"
console.log(checkTriangleType1(3, 4, 3)); // Output: "isosceles"
console.log(checkTriangleType1(5, 8, 6)); // Output: "scalene