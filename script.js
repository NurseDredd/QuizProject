function changeMode() {
    let body = document.body;
    let changeBtn = document.getElementById('changeBtn');
    body.classList.toggle("dark");
    changeBtn.textContent = body.classList.contains('dark') ? "Light mode" : "Dark mode"; // Använder ternära operator (aka WTF), classlist "dark" ändra knapptext till Light, annars dark.
}

let result = 0;
let resultMessage = document.querySelector('#result');
let resetBtn = document.querySelector('#resetBtn');
let submitBtn = document.querySelector('#submitBtn');



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

    changeColorCheck (checkboxQ4); // Kör funktion för att ändra bakgrundsfärg li beroende på rätt/fel svar.
    changeColorCheck (checkboxQ8); // Kör funktion för att ändra bakgrundsfärg li beroende på rätt/fel svar.
    disableInputs (); // Kör funktion för att disable alla inputs.
    
    let correctAnswers = chosenAnswerArr.filter((answer) => { // filtrera ut alla rätta svar från array
     return answer === "correct";
    });
    correctAnswers.forEach((answer) =>{
    result++;                            // lägg till poäng i resultat för rätta svar.
    });
    chosenAnswerRadio.forEach((radio) => {
        let parentLi = radio.closest('li'); //definerar list närmast radioinput
    if (radio.value === "correct") {
        parentLi.style.backgroundColor = '#77DD77'; //om rätt svar - grön färg
    } else {
        parentLi.style.backgroundColor = '#d62121'; // annars röd färg
    }
    });

   resultMessage.innerHTML = result; // Visa resultat

    let points = result / 10 ; // Beräkna procent av poäng och visa olika text/färg beroende på resultat.
    if (points >= 0.75) {
    resultMessage.style.color = 'green';
    resultMessage.innerHTML = ("Grattis, du är en sann överlevare!" + " " + "Du fick" + " " + result + " " + "av 10 antal rätt.");
    } else if (points < 0.75 && points >= 0.5) {
    resultMessage.style.color = 'orange';
    resultMessage.innerHTML = ("Med lite tur överlever du kanske.." + " " + "Du fick" + " " + result + " " + "av 10 antal rätt.");
    } else if (points < 0.5) {
    resultMessage.style.color = 'red';
    resultMessage.innerHTML = ("Du skulle inte överleva en dag!" + " " + "Du fick" + " " + result + " " + "av 10 antal rätt.");
    };
    
    submitBtn.style.display = 'none'; //Dölj submitBtn och byt ut mot resetBtn
    resetBtn.style.display = 'block';

};

function changeColorCheck (checkboxes) {
    let numOfCorrect = 0; // funktion för att lägga grön/röd bakgrundsfärg på checkboxar.
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked && checkbox.value === 'correct') {
            numOfCorrect++;
        }
    });
    checkboxes.forEach((checkbox) => {
        let li = checkbox.closest('li');
        if (checkbox.checked && numOfCorrect === 3) {
            li.style.backgroundColor = "#77DD77";
        } else if (checkbox.checked) {
            li.style.backgroundColor = '#d62121';
        }
    });
}
         
    
        

function disableInputs () { // funktion för att stänga av radiobtns/checkboxes och därmed förhindra att ändra svar efter man tryckt "submit".
    document.querySelectorAll('input[type="checkbox"]').forEach((radio) => {
        radio.disabled = true;
    });
    
    document.querySelectorAll('input[type="radio"]').forEach((checkbox) => {
        checkbox.disabled = true;
    });
};

function reset () { // funktion för att starta om quizet och scrolla tillbaka till topp.
    window.location.reload();
    window.scrollTo(0,0);
};
