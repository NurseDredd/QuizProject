function changeMode() {
    let element = document.body;
    element.classList.toggle("dark");
}

let submitBtn = document.querySelector("#submitBtn");



function submit () {
  let chosenAnswerArr = [];
 
  let chosenAnswerRadio = document.querySelectorAll('input[type="radio"]:checked');
  chosenAnswerRadio.forEach((radio) => {
    chosenAnswerArr.push(radio.value);
  })
  let chosenAnswerCheck = document.querySelectorAll('input[type="checkbox"]:checked');
  chosenAnswerCheck.forEach((checkbox) => {
    chosenAnswerArr.push(checkbox.value);
    console.log(chosenAnswerArr);
});
  
  let correctAnswers = chosenAnswerArr.filter((correct) => {
    return chosenAnswerArr === "correct";
    console.log("correctAnswers");
  })
};