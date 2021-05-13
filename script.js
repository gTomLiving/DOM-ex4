const coinDisplay = document.querySelector('.coin-display');
const eachCoin = document.querySelectorAll('coins');





function addingCoins(coins) {
    for(let i = 1; i <= numberOfCoins; i++) {
        console.log(numberOfCoins);
        const newCoin = document.createElement('div');
        newCoin.classList.add('coins');
        newCoin.innerText = coins;
        coinDisplay.appendChild(newCoin);
    }
}

// let dimes = document.querySelector('.dime');
// let nickels = document.querySelector('nickel');
// let quarters = document.querySelector('.quarter');

const formField = document.querySelector('#form-field');
formField.addEventListener('submit', (event) => {
    
    event.preventDefault();

    const formData = new FormData(formField);


    const howManyCoins = formData.get('how-many');
    console.log(howManyCoins);
    numberOfCoins = parseInt(howManyCoins);
    const whichCoins = formData.get('which-coins');
    console.log(whichCoins);
    console.log(numberOfCoins);
    if (whichCoins === "Penny") {
        addingCoins("Penny");
    
        }
    else if (whichCoins === "Nickel") {
        addingCoins("Nickel");
    }
    else if (whichCoins === "Dime") {
        addingCoins("Dime");
    }
    else if (whichCoins === "Quarter") {
        addingCoins("Quarter");
    }
})

coinDisplay.addEventListener('click', (event) => {

    coinDisplay.removeChild(event.target);
})