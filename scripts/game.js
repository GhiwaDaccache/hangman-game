const words = ['numbers', 'cars', 'bicycle', 'chocolate', 'mountain']
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
    if (randomWord.indexOf(letter) != -1) {
        const letterIndex = randomWord.indexOf(letter);
        
    } else {
        console.log("The word Example is not in the string.");
    }
}
checkLetter('a')