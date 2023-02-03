let score = 0;
const displayScore = document.getElementById("score")
let holes = document.getElementsByClassName("hole")

let hardButton = document.getElementById("hard")
let mediumButton = document.getElementById("medium")
let easyButton = document.getElementById("easy")
let resetButton = document.getElementById("reset")
let didReset = false

resetButton.addEventListener('click', function(){
    score = 0
    displayScore.innerText = 0
    if(didReset === false){
        didReset = true
        console.log(didReset)
    }
})


hardButton.addEventListener('click', function(){
    score = 0
    let hardMode = setInterval(function() {
            const randomHolesIndex = Math.floor(Math.random() * holes.length)
            holes[randomHolesIndex].classList.toggle("mole")
            if(didReset === true){
                score = 0
                displayScore.innerText = score
                clearInterval(hardMode)
                holes.classList.remove("mole")
            }
    }, 300)
        document.getElementById("whack-a-mole").addEventListener('click', function(evt) {
            if(evt.target.matches(".mole")){
                evt.target.classList.remove("mole")
                score++
                displayScore.innerText = score
            }
        })        
    
})

easyButton.addEventListener('click', function(){
    score = 0;
    setInterval(function() {
            const randomHolesIndex = Math.floor(Math.random() * holes.length)
            holes[randomHolesIndex].classList.toggle("mole")
    }, 500)
    document.getElementById("whack-a-mole").addEventListener('click', function(evt) {
        if(evt.target.matches(".mole")){
            evt.target.classList.remove("mole")
            score++
            displayScore.innerText = score
        }
    })
})

mediumButton.addEventListener('click', function(){
    score = 0;
    setInterval(function() {
            const randomHolesIndex = Math.floor(Math.random() * holes.length)
            holes[randomHolesIndex].classList.toggle("mole")
    }, 400)
    document.getElementById("whack-a-mole").addEventListener('click', function(evt) {
        if(evt.target.matches(".mole")){
            evt.target.classList.remove("mole")
            score++
            displayScore.innerText = score
        }
    })
})



