// phone price


// document.getElementById('buttonClick').addEventListener('click', function () {

//     let currentValue = Number(document.getElementById('increaseValue').value)
//     currentValue++;
//     console.log(typeof currentValue, currentValue);
//     // increase value
//     document.getElementById('increaseValue').value = currentValue

//     // increase total amount
//     let currentAmount = Number(document.getElementById('updateValue').innerText)
//     let totalAmount = 1219 * currentValue
//     console.log(typeof currentAmount, currentAmount, totalAmount);
//     document.getElementById('updateValue').innerText = totalAmount
// })
// document.getElementById('decreaseValue').addEventListener('click', function () {
//     let currentValue = Number(document.getElementById('increaseValue').value)
//     currentValue--;
//     if (currentValue < 0) {
//         currentValue = 0
//     }
//     console.log(typeof currentValue);
//     document.getElementById('increaseValue').value = currentValue

//     // decrease total amount
//     let currentAmount = Number(document.getElementById('updateValue').innerText)
//     let totalAmount = 1219 * currentValue
//     console.log(typeof currentAmount, currentAmount, totalAmount);
//     document.getElementById('updateValue').innerText = totalAmount

// })


// // item increasement (Case - Black)

// document.getElementById('CaseBlackIncrease').addEventListener('click', function () {

//     let currentValue = Number(document.getElementById('CaseBlackIncreaseValue').value)
//     currentValue++;
//     console.log(typeof currentValue, currentValue);
//     // increase value
//     document.getElementById('CaseBlackIncreaseValue').value = currentValue

//     // increase total amount
//     let currentAmount = Number(document.getElementById('CaseBlackUpdateValue').innerText)
//     let totalAmount = 50 * currentValue
//     console.log(typeof currentAmount, currentAmount, totalAmount);
//     document.getElementById('CaseBlackUpdateValue').innerText = totalAmount


// })


// // item Decreasement (Case - Black)

// document.getElementById('CaseBlackDecreaseValue').addEventListener('click', function () {
//     let currentValue = Number(document.getElementById('CaseBlackIncreaseValue').value)
//     currentValue--;
//     if (currentValue < 0) {
//         currentValue = 0
//     }
//     console.log(typeof currentValue);
//     document.getElementById('CaseBlackIncreaseValue').value = currentValue

//     // decrease total amount
//     let currentAmount = Number(document.getElementById('CaseBlackUpdateValue').innerText)
//     let totalAmount = 50 * currentValue
//     console.log(typeof currentAmount, currentAmount, totalAmount);
//     document.getElementById('CaseBlackUpdateValue').innerText = totalAmount

// })



//  phone price

document.getElementById('buttonClick').addEventListener('click', function () {

    // let currentValue = Number(document.getElementById('increaseValue').value)
    // currentValue++;
    // // console.log(typeof currentValue, currentValue);
    // // increase value
    // document.getElementById('increaseValue').value = currentValue

    // // increase total amount
    // let currentAmount = Number(document.getElementById('updateValue').innerText)
    // let totalAmount = 1219 * currentValue
    // console.log(typeof currentAmount, currentAmount, totalAmount);
    // document.getElementById('updateValue').innerText = totalAmount

    handleProductChange(true);

})

document.getElementById('decreaseValue').addEventListener('click', function () {
    let currentValue = Number(document.getElementById('increaseValue').value)
    // currentValue--;
    // if (currentValue < 0) {
    //     currentValue = 0
    // }

    // console.log(typeof currentValue);
    // document.getElementById('increaseValue').value = currentValue

    // // decrease total amount
    // let currentAmount = Number(document.getElementById('updateValue').innerText)
    // let totalAmount = 1219 * currentValue
    // console.log(typeof currentAmount, currentAmount, totalAmount);
    // document.getElementById('updateValue').innerText = totalAmount

    handleProductChange(false);

});

function handleProductChange(isIncrease) {
    let currentValue = Number(document.getElementById('increaseValue').value)

    if (isIncrease == true) {
        currentValue++;
    } else if (isIncrease == false & currentValue > 0) {
        currentValue--;
    }
    document.getElementById('increaseValue').value = currentValue
    let currentAmount = Number(document.getElementById('updateValue').innerText)
    let totalAmount = 1219 * currentValue
    console.log(typeof currentAmount, currentAmount, totalAmount);
    document.getElementById('updateValue').innerText = totalAmount
}





// case black

function handleCaseBlack(isIncrease) {
    let currentValue = Number(document.getElementById('CaseBlackIncreaseValue').value)

    if (isIncrease == true) {
        currentValue++;
    } else if (isIncrease == false & currentValue > 0) {
        currentValue--;
    }
    document.getElementById('CaseBlackIncreaseValue').value = currentValue
    let currentAmount = Number(document.getElementById('CaseBlackUpdateValue').innerText)
    let totalAmount = 50 * currentValue
    console.log(typeof currentAmount, currentAmount, totalAmount);
    document.getElementById('CaseBlackUpdateValue').innerText = totalAmount
}




// item increasement (Case - Black)

document.getElementById('CaseBlackIncrease').addEventListener('click', function () {

    // let currentValue = Number(document.getElementById('CaseBlackIncreaseValue').value)
    // currentValue++;
    // console.log(typeof currentValue, currentValue);
    // // increase value
    // document.getElementById('CaseBlackIncreaseValue').value = currentValue

    // // increase total amount
    // let currentAmount = Number(document.getElementById('CaseBlackUpdateValue').innerText)
    // let totalAmount = 50 * currentValue
    // console.log(typeof currentAmount, currentAmount, totalAmount);
    // document.getElementById('CaseBlackUpdateValue').innerText = totalAmount

    handleCaseBlack(true);


})


// item Decreasement (Case - Black)

document.getElementById('CaseBlackDecreaseValue').addEventListener('click', function () {
    // let currentValue = Number(document.getElementById('CaseBlackIncreaseValue').value)
    // currentValue--;
    // if (currentValue < 0) {
    //     currentValue = 0
    // }
    // console.log(typeof currentValue);
    // document.getElementById('CaseBlackIncreaseValue').value = currentValue

    // // decrease total amount
    // let currentAmount = Number(document.getElementById('CaseBlackUpdateValue').innerText)
    // let totalAmount = 50 * currentValue
    // console.log(typeof currentAmount, currentAmount, totalAmount);
    // document.getElementById('CaseBlackUpdateValue').innerText = totalAmount

    handleCaseBlack(false);

});



