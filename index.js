const text = document.getElementById("text")
const phrases = ["Hiya! ", "How are you? ", "My name is Kia, ","I'm a web developer. ", "Let's connect! "]
let currentText  = []
let i = 0
let j = 0
let isDeleting = false
let isEnd = false

const spedUp = Math.random()*(30-10)+10
const normalSpeed = Math.random()*(60-70)+60


function loop(){
    isEnd = false
    text.textContent = currentText.join("")
    if (i<phrases.length){
        if(!isDeleting && j<=phrases[i].length){
            currentText.push(phrases[i][j])
            j++
        }
        if(isDeleting && j<=phrases[i].length){
            currentText.pop(phrases[i][j])
            j--
        }
    
        if(j == phrases[i].length){
            isEnd = true
            isDeleting = true
            
        }

        if(isDeleting && j == 0){
            isDeleting = false
            i++
            if(i == phrases.length){
                i = 0
            }
        }

    } 
    const time = isEnd? 1500 : isDeleting? spedUp : normalSpeed
    

    setTimeout(loop, time)
}

loop()
