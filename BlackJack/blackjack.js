let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let massage = ""
let massageEl = document.getElementById("massage-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
let spieler = document.querySelector("#spieler-el")
let player = {
    name:"Spieler",
    chips: 145
}

/*
spieler.textContent = player.name + ": " + player.chips +"€"
console.log(cards)

Kann weiterentwickelt werden 
*/

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13) + 1

    if (randomNumber === 1 ){
        return 11
    } else if (randomNumber > 10){
        return 10
    } else {
        return randomNumber
    }
}

function reframeGame() {
    if(sum <= 20) {
        massage = "Möchtest du weiter machen?"
    } else if (sum===21){
        hasBlackJack = true
        massage = "Wohoo! BlackJack!"
    } else {
        isAlive = false
        massage = "Du hast verloren!"
    }

    massageEl.textContent = massage
    sumEl.textContent = "Sum: "+ sum
    //cardEl.textContent = "Cards: " + cards[0] + " - " + cards[1]
    renderGame()
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    reframeGame()
}

function newCard() {
    if(isAlive === true && hasBlackJack === false){   
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    reframeGame()
    }
}

function renderGame() {
    cardEl.textContent = "Karten: ";
    for ( i=0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " ";
    }
}




