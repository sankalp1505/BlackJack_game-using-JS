let cards=[]
let sum=0

let player={
    name:"Sankalp",
    chips: 150
}

let hasBlackjack=false;
let isalive=false;
let message=" "

let messageEL=document.getElementById("message-el")
let sumEL=document.getElementById("sum-el")
let cardEL=document.getElementById("card-el")
let playerEL=document.getElementById("player-el")


playerEL.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let floor=Math.floor(Math.random()*13)+ 1
    if(floor>10){
        return 10;
    }
    else if(floor===1){
        return 11
    }
    else{
        return floor
    }
    
}

function startGame(){
    isalive=true
    let first=getRandomCard()
    let second=getRandomCard()
    cards=[first,second]
    sum=first+second
    renderGame()
}

function renderGame(){
    
    cardEL.textContent="Card: "
    for (let i = 0; i < cards.length; i++) {
        cardEL.textContent +=cards[i]+" "
        
    }
    sumEL.textContent="Sum: "+sum
    if(sum<=20){
        message= "Do you want to draw a new card?"
        
    }
    else if(sum ===21){
        message="You've got Blackjack!"
        hasBlackjack=true
    }
    else{
        message="You're out of the game!"
        isalive=false
    }
    messageEL.textContent=message
}

function newCard(){
    if(isalive===true && hasBlackjack===false){
        let card=getRandomCard()
        sum=sum+card
        cards.push(card)
        renderGame()
    }
    
}