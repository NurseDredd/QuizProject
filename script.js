function changeMode() {
    let element = document.body;
    element.classList.toggle("dark");
}

let result = 0;
let resultDisplay = document.querySelector("#result");
let resultMessage = document.querySelector('h3');




function submit () {
   
   let chosenAnswerArr = []; // deklarerar tom array för valda svarsalternativ
   let chosenAnswerRadio = document.querySelectorAll('input[type="radio"]:checked'); //variabel för radiobuttons
    chosenAnswerRadio.forEach((radio) => { // pushar in valda radiobuttons i svarsarray.
    chosenAnswerArr.push(radio.value);
    });


    let checkboxArrQ4 = [];
    let checkboxArrQ8 = [];
    let checkboxQ4 = document.querySelectorAll('[name="question4"]');
    console.log(checkboxQ4);
    checkboxQ4.forEach((checkbox) => {
        if(checkbox.checked && checkbox.value === 'correct'){
        checkboxArrQ4.push(checkbox.value); 
        }
    })
    if (checkboxArrQ4.length === 3) {
        chosenAnswerArr.push('correct');
    }

    let checkboxQ8 = document.querySelectorAll('[name="question8"]');
    checkboxQ8.forEach((checkbox) => {
        if(checkbox.checked && checkbox.value === 'correct'){
        checkboxArrQ8.push(checkbox.value); 
        }
    })
    if (checkboxArrQ8.length === 3) {
        chosenAnswerArr.push('correct');
    }

    changeColorCheck (checkboxQ4);
    changeColorCheck (checkboxQ8);
    
    let correctAnswers = chosenAnswerArr.filter((answer) => { // filtrera ut alla rätta svar från array
     return answer === "correct";
    });
    correctAnswers.forEach((answer) =>{
    result++;                            // lägg till poäng i resultat för rätta svar.
    });
    chosenAnswerRadio.forEach((radio) => {
        let parentLi = radio.closest('li'); //definerar list närmast radioinput
    if (radio.value === "correct") {
        parentLi.style.backgroundColor = 'darkgreen'; //om rätt svar - grön färg
    } else {
        parentLi.style.backgroundColor = 'darkred'; // annars röd färg
    }
    });

   resultDisplay.innerHTML = result; // Visa resultat

    let points = result / 10 ;
    if (points >= 0.75) {
    resultMessage.style.color = 'green';
    resultMessage.innerHTML = ("Grattis, du är en överlevare!" + " " + "Du fick" + " " + result + " " + "antal rätt");
    } else if (points < 0.75 && points >= 0.5) {
    resultMessage.style.color = 'orange';
    resultMessage.innerHTML = ("Med lite tur överlever du kanske.." + " " + "Du fick" + " " + result + " " + "antal rätt");
    } else if (points < 0.5) {
    resultMessage.style.color = 'red';
    resultMessage.innerHTML = ("Du skulle inte överleva en dag!" + " " + "Du fick" + " " + result + " " + "antal rätt");
    };

};



function reset () {
    window.location.reload();
    window.scrollTo(0,0);
};

function changeColorCheck (checkboxes) { // funktion för att lägga grön/röd bakgrundsfärg på checkboxar.
    checkboxes.forEach((checkbox) => {
        let li = checkbox.closest('li');
        if (checkbox.checked ) {
            li.style.backgroundColor = checkbox.value === 'correct' ? 'darkgreen' : 'darkred';
        }
    })
};
