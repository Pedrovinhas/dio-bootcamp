const currentNumberSpan = document.getElementById('currentNumber')

let currentNumber = 0;

function increment() {
    currentNumber += 1
    console.log(currentNumber)
    currentNumberSpan.innerHTML = `${currentNumber}`
}

function decrement() {
    currentNumber -= 1
    console.log(currentNumber)
    currentNumberSpan.innerHTML = `${currentNumber}`
}