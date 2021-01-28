// document.getElementById('buttonClick').addEventListener('click', function () {

//     // let productInput = Number(document.getElementById('increaseValue').value)
//     // productInput++;
//     // // console.log(typeof productInput, productInput);
//     // // increase value
//     // document.getElementById('increaseValue').value = productInput

//     // // increase total amount
//     // let currentAmount = Number(document.getElementById('updateValue').innerText)
//     // let totalAmount = 1219 * productInput
//     // console.log(typeof currentAmount, currentAmount, totalAmount);
//     // document.getElementById('updateValue').innerText = totalAmount

//     handleProductChange(true);

// })

// document.getElementById('decreaseValue').addEventListener('click', function () {
//     let productInput = Number(document.getElementById('increaseValue').value)
//     // productInput--;
//     // if (productInput < 0) {
//     //     productInput = 0
//     // }

//     // console.log(typeof productInput);
//     // document.getElementById('increaseValue').value = productInput

//     // // decrease total amount
//     // let currentAmount = Number(document.getElementById('updateValue').innerText)
//     // let totalAmount = 1219 * productInput
//     // console.log(typeof currentAmount, currentAmount, totalAmount);
//     // document.getElementById('updateValue').innerText = totalAmount

//     handleProductChange(false);

// });




/** 
function handleProductChange(isIncrease) {
    let productInput = Number(document.getElementById('phone-count').value)

    if (isIncrease == true) {
        productInput++;
    } else if (isIncrease == false & productInput > 0) {
        productInput--;
    }
    document.getElementById('phone-count').value = productInput
    let currentAmount = Number(document.getElementById('updateValue').innerText)
    let totalAmount = 1219 * productInput
    console.log(typeof currentAmount, currentAmount, totalAmount);
    document.getElementById('updateValue').innerText = totalAmount
}

function handleCaseBlack(isIncrease) {
    let productInput = Number(document.getElementById('case-count').value)

    if (isIncrease == true) {
        productInput++;
    } else if (isIncrease == false & productInput > 0) {
        productInput--;
    }
    document.getElementById('case-count').value = productInput
    let currentAmount = Number(document.getElementById('CaseBlackUpdateValue').innerText)
    let totalAmount = 50 * productInput
    console.log(typeof currentAmount, currentAmount, totalAmount);
    document.getElementById('CaseBlackUpdateValue').innerText = totalAmount
}
*/

function handleCaseBlack(product, isIncrease) {
    let productInput = Number(document.getElementById(product + '-count').value)

    if (isIncrease == true) {
        productInput++;
    } else if (isIncrease == false & productInput > 0) {
        productInput--;
    }
    document.getElementById(product + '-count').value = productInput
    let currentAmount = Number(document.getElementById(product).innerText)
    let productTotal = 0
    // let totalAmount = 50 * productInput
    if (product == 'phone') {
        productTotal = 1200 * productInput
    }
    if (product == 'case') {
        productTotal = 50 * productInput
    }
    console.log(typeof currentAmount, currentAmount, productTotal);
    document.getElementById(product).innerText = productTotal
    calculateTotal();

}

function calculateTotal() {
    const phoneInput = Number(document.getElementById('phone-count').value)
    const caseInput = Number(document.getElementById('case-count').value)
    const totalAmount = phoneInput * 1200 + caseInput * 50
    document.getElementById('total-price').innerText = '$' + totalAmount

}



// item increasement (Case - Black)

// document.getElementById('CaseBlackIncrease').addEventListener('click', function () {

//     // let productInput = Number(document.getElementById('CaseBlackIncreaseValue').value)
//     // productInput++;
//     // console.log(typeof productInput, productInput);
//     // // increase value
//     // document.getElementById('CaseBlackIncreaseValue').value = productInput

//     // // increase total amount
//     // let currentAmount = Number(document.getElementById('CaseBlackUpdateValue').innerText)
//     // let totalAmount = 50 * productInput
//     // console.log(typeof currentAmount, currentAmount, totalAmount);
//     // document.getElementById('CaseBlackUpdateValue').innerText = totalAmount

//     handleCaseBlack(true);


// })


// // item Decreasement (Case - Black)

// document.getElementById('CaseBlackDecreaseValue').addEventListener('click', function () {
//     // let productInput = Number(document.getElementById('CaseBlackIncreaseValue').value)
//     // productInput--;
//     // if (productInput < 0) {
//     //     productInput = 0
//     // }
//     // console.log(typeof productInput);
//     // document.getElementById('CaseBlackIncreaseValue').value = productInput

//     // // decrease total amount
//     // let currentAmount = Number(document.getElementById('CaseBlackUpdateValue').innerText)
//     // let totalAmount = 50 * productInput
//     // console.log(typeof currentAmount, currentAmount, totalAmount);
//     // document.getElementById('CaseBlackUpdateValue').innerText = totalAmount

//     handleCaseBlack(false);

// });
//hahahah 







