// Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console.


let num1, num2

num1 = parseInt(prompt("Enter Your Number num1"))
num2 = parseInt(prompt("Enter Your Number num2"))
if (num1 > num2) {
    console.log("The larger number is " + num1);
}
else {
    console.log("The larger number is " + num2);
}


// Write a JavaScript conditional statement to find the sign of a number. Display an alert box with the specified sign.

let num3
num3 = parseInt(prompt("Enter any Number"))
if (num3 > 0) {
    alert("The sign is +")
} else {
    alert("The sign is -")
}

// Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console.

let n1, n2, n3, n4, n5
n1 = parseInt(prompt("Enter any number"))
n2 = parseInt(prompt("Enter any number"))
n3 = parseInt(prompt("Enter any number"))
n4 = parseInt(prompt("Enter any number"))
n5 = parseInt(prompt("Enter any number"))

if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) {
    console.log(n1);
}
if (n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5) {
    console.log(n2);
}
if (n3 > n1 && n3 > n2 && n3 > n4 && n1 > n5) {
    console.log(n3);
}
if (n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5) {
    console.log(n4);
}
if (n5 > n1 && n5 > n2 && n5 > n3 && n5 > n4) {
    console.log(n5);
}

//  Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.


for (let i = 0; i <= 15; i++) {
    if (i === 0) {
        console.log(i + " is even");
    }
    else if (i % 2 === 0) {
        console.log(i + " is even");
    }
    else {
        console.log(i + " is odd");
    }
}

// Write a JavaScript program which computes the average marks of the following students Then, this average is used to determine the corresponding grade.

let avg = 79
if (avg < 60) {
    console.log("Grade : F");
}
else if (avg < 70) {
    console.log("Grade : D");
}
else if (avg < 80) {
    console.log("Grade : C");
} else if (avg < 90) {
    console.log("Grade : B");
} else if (avg < 100) {
    console.log("Grade : A");
}

// Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log(i + " Fizz");
    }
    else if (i % 5 === 0) {
        console.log(i + " Buzz");
    }
    else {
        console.log(i);
    }
}

// Write a JavaScript program to construct the following pattern, using a nested for loop.

let star;
for (let x = 1; x <= 6; x++) {
    for (let y = 1; y < x; y++) {
        star = star + ("*");
    }
    console.log(star);
    star = '';
}