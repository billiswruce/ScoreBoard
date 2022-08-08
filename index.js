let homeScore = 0
let guestScore = 0
addHome = document.getElementById("total-score-home")
addGuest = document.getElementById("total-score-guest")

//Home
function onePointHome(){
    homeScore += 1
    addHome.textContent = homeScore
}

function twoPointHome(){
    homeScore += 2
    addHome.textContent = homeScore
}

function threePointHome(){
    homeScore += 3
    addHome.textContent = homeScore
}

//Guest
function onePointGuest(){
    guestScore += 1
    addGuest.textContent = guestScore
}

function twoPointsGuest(){
    guestScore += 2
    addGuest.textContent = guestScore
}

function threePointsGuest(){
    guestScore += 3
    addGuest.textContent = guestScore
}