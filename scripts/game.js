const words = ['numbers', 'cars', 'bicycle', 'chocolate', 'mountain', 'hanady']
const randomWord = words[Math.floor(Math.random() * words.length)]; 

const wordLength = randomWord.length
const answerSection = document.getElementById('answer-section')

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
    for (let i = 0; i < randomWord.length; i++){
        if (randomWord[i] == letter) {
            lettersIndices.push(i)    
        } 
        else {
            console.log("The word Example is not in the string.");
        }
    }
}


checkLetter('a')