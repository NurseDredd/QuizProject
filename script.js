function changeMode() {
    let element = document.body;
    element.classList.toggle("dark");
}

// let correct = document.querySelectorAll('input[value="correct"]:checked');
let submitBtn = document.querySelector("#submitBtn");
let result = 0;
let resultDisplay = document.querySelector("#result");




function submit () {
   let li = document.querySelectorAll("li");
   let chosenAnswerArr = [];
 
   let chosenAnswerRadio = document.querySelectorAll('input[type="radio"]:checked');
    chosenAnswerRadio.forEach((radio) => {
    chosenAnswerArr.push(radio.value);
    })
    let chosenAnswerCheck = document.querySelectorAll('input[type="checkbox"]:checked');
    chosenAnswerCheck.forEach((checkbox) => {
      chosenAnswerArr.push(checkbox.value);
 });
  let correctAnswers = chosenAnswerArr.filter((answer) => { // filtrera ut alla rätta svar från array
     return answer === "correct";
    });
    correctAnswers.forEach((answer) =>{
    result++;                            // lägg till poäng i resultat för rätta svar.
    });
    chosenAnswerRadio.forEach((radio) => {
        let parentLi = radio.closest('li'); //definerar list närmast radioinput
    if (radio.value === "correct") {
        parentLi.style.backgroundColor = 'lime'; //om rätt svar - grön färg
    } else {
        parentLi.style.backgroundColor = 'red'; // annars röd färg
    }
    });

   let incorrectAnswers = chosenAnswerArr.filter((answer) => { // filtrera ut felaktiga svar från array.
    return answer === "incorrect";
   });
   incorrectAnswers.forEach((answer) => {
   })
   resultDisplay.innerHTML = result; // Visa resultat
   
 console.log(correctAnswers);
};

function reset () {
    window.location.reload();
}