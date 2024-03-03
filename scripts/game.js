const words = ['NUMBERS', 'CARS', 'BICYCLE', 'CHOCOLATE', 'MOUNTAIN', 'HANADY']
const randomWord = words[Math.floor(Math.random() * words.length)]; 

const wordLength = randomWord.length
const answerSection = document.getElementById('answer-section')

let errorInputs = []

const buttons = document.querySelectorAll('.letter')

function clickLetters(){
    for (let i=0; i < buttons.length; i++){
        const button = buttons[i];
        button.addEventListener("click", function () {
            const letter = button.innerHTML;
            checkLetter(letter);
        });
    }
}
clickLetters()

console.log(randomWord)

function fillAnswerSection(wordLength){
    answerSection.innerHTML = "";
    for (let i = 0; i < wordLength; i++) {
        answerSection.innerHTML += "<span>_</span>";
      }
}
fillAnswerSection(wordLength)


function checkLetter(letter){
    let lettersIndices = []
    console.log(letter)

    for (let i = 0; i < randomWord.length; i++){
        if (randomWord[i] == letter) {
            lettersIndices.push(i+1)   
            console.log(lettersIndices) 
        } 
    }

    if (lettersIndices.length == 0){
        if (errorInputs.length == 0){
            head()
            errorInputs.push('Head')
        }
        else if (errorInputs.length == 1){
            body()
            errorInputs.push('Body')
        }
        else if (errorInputs.length == 2){
            leftHand()
            errorInputs.push('Left Hand')
        }
        else if (errorInputs.length == 3){
            rightHand()
            errorInputs.push('Right Hand')
        }
        else if (errorInputs.length == 4){
            leftLeg()
            errorInputs.push('Left Leg')
        }
        else if (errorInputs.length == 5){
            rightLeg()
            errorInputs.push('Right Leg')
            alert('Oh oh! You lost the game')
        }

    }
    else{
        for (let i = 0; i < lettersIndices.length; i++)
            document.querySelector('#answer-section :nth-child('+ lettersIndices[i] +')').innerHTML = letter ;
    }
}





