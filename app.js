document.getElementById('buttonClick').addEventListener('click', function () {

    let currentValue = Number(document.getElementById('increaseValue').value)
    currentValue++;
    console.log(typeof currentValue, currentValue);
    // increase value
    document.getElementById('increaseValue').value = currentValue

    // increase total amount
    let currentAmount = Number(document.getElementById('updateValue').innerText)
    let totalAmount = 1219 * currentValue
    console.log(typeof currentAmount, currentAmount, totalAmount);
    document.getElementById('updateValue').innerText = totalAmount
})
document.getElementById('decreaseValue').addEventListener('click', function () {
    let currentValue = Number(document.getElementById('increaseValue').value)
    currentValue--;
    if (currentValue < 0) {
        currentValue = 0
    }
    console.log(typeof currentValue);
    document.getElementById('increaseValue').value = currentValue

    // decrease total amount
    let currentAmount = Number(document.getElementById('updateValue').innerText)
    let totalAmount = 1219 * currentValue
    console.log(typeof currentAmount, currentAmount, totalAmount);
    document.getElementById('updateValue').innerText = totalAmount

})