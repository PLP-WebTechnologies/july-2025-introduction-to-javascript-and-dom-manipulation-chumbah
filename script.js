// Variable declarations, data types, operators, and conditionals
const checkAgeBtn = document.getElementById('checkAgeBtn');
const ageInput = document.getElementById('ageInput');
const ageResult = document.getElementById('ageResult');

checkAgeBtn.addEventListener('click', function() {
    // Get user input and check age
    let age = Number(ageInput.value);
    if (age >= 18) {
        ageResult.textContent = "You are an adult.";
    } else if (age > 0) {
        ageResult.textContent = "You are a minor.";
    } else {
        ageResult.textContent = "Please enter a valid age.";
    }
});

// Part 2
// Function to calculate sum
function calculateSum(a, b) {
    return a + b;
}

// Function to toggle highlight class
function toggleHighlight(element) {
    element.classList.toggle('highlight');
}

// Use functions with buttons
const sumBtn = document.getElementById('sumBtn');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const sumResult = document.getElementById('sumResult');

sumBtn.addEventListener('click', function() {
    let a = Number(num1.value);
    let b = Number(num2.value);
    let sum = calculateSum(a, b);
    sumResult.textContent = `Sum: ${sum}`;
});

const toggleBtn = document.getElementById('toggleBtn');
const toggleText = document.getElementById('toggleText');
toggleBtn.addEventListener('click', function() {
    toggleHighlight(toggleText);
});

//  Part 3:
// Countdown using a for loop
const countdownBtn = document.getElementById('countdownBtn');
const countdownList = document.getElementById('countdownList');
countdownBtn.addEventListener('click', function() {
    countdownList.innerHTML = '';
    for (let i = 5; i >= 1; i--) {
        let li = document.createElement('li');
        li.textContent = i;
        countdownList.appendChild(li);
    }
});

// Array iteration using forEach
const showFruitsBtn = document.getElementById('showFruitsBtn');
const fruitsList = document.getElementById('fruitsList');
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

showFruitsBtn.addEventListener('click', function() {
    fruitsList.innerHTML = '';
    fruits.forEach(function(fruit) {
        let li = document.createElement('li');
        li.textContent = fruit;
        fruitsList.appendChild(li);
    });
});

//  Part 4:
// 1. Change the page title
const changeTitleBtn = document.getElementById('changeTitleBtn');
changeTitleBtn.addEventListener('click', function() {
    document.title = "Title Changed!";
});

// 2. Add item to a dynamic list
const addItemBtn = document.getElementById('addItemBtn');
const dynamicList = document.getElementById('dynamicList');
let itemCount = 1;
addItemBtn.addEventListener('click', function() {
    let li = document.createElement('li');
    li.textContent = `New Item ${itemCount++}`;
    dynamicList.appendChild(li);
});