// 1. Write a function that creates a closure and returns a function that can add a specific number to any number passed to it. For example, if the closure is created with 5, the returned function should add 5 to any number passed to it.

function Adder(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = Adder(5);

console.log(add5(2));

// 2. Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You can assume that the array is not nested.

function findIndex(arr, target) {
    if (!arr.length) return false;
    if (arr[0] == target) return true;
    return findIndex(arr.slice(1), target);
}
console.log(findIndex([1, 2, 3, 4, 5, 6, 7], 1)); // -> true
console.log(findIndex([1, 2, 3, 4, 5, 6, 7], 9)); // -> false

// 3. Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be used as the text content of the new paragraph element.

function AddPara(text) {
    const para = document.createElement("p");
    para.textContent = text;
    document.body.appendChild(para);
}
AddPara("Assignment 2")

// 4. Write a function that adds a new list item to an unordered list in an HTML document. The function should take a string argument that will be used as the text content of the new list item.

const ul = document.createElement("ul");
function AddItem(item) {
    const li = document.createElement("li");
    li.textContent = item
    ul.appendChild(li)
    document.body.appendChild(ul)

}

AddItem("Apple");
AddItem("Banana");
AddItem("Orange");

// 5. Write a function that changes the background color of an HTML element. The function should take two arguments: the first argument is a reference to the HTML element, and the second argument is a string representing the new background color.

function BgColor(ele, color) {
    const element = document.querySelector(ele);
    element.style.backgroundColor = color
}

BgColor("p", "green");
BgColor("ul", "red");

// 6. Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to use for storing the object, and the second argument is the object to store.

function ObjToLocalStorage(key, value) {
    let obj = JSON.stringify(value)
    localStorage.setItem(key, obj)
}

ObjToLocalStorage("User", { user: "Sami", age: 20 })

// 7. Write a function that retrieves an object from localStorage. The function should take one argument, which is a string representing the key used to store the object. The function should return the object.

function RetrieveObj(key) {
    let value = localStorage.getItem(key)
    let obj = JSON.parse(value)
    console.log(obj)
}

RetrieveObj("User")

// Write a function that takes an object and saves each property to localStorage using the property name as the key and the property value as the value. The function should also retrieve the object from localStorage and return it as a new object. 

function ObjectToLocalStorage(obj) {
    for (let property in obj) {
        localStorage.setItem(property, obj[property]);
    }

    let newObject = {};

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

        newObject[key] = value;
    }

    console.log(newObject);
}
ObjectToLocalStorage({ user: "Shaikh", age: 20, profession: "React Developer" })
