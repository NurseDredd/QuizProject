
// globala variabler 
let result = 0;
let resultMessage = document.querySelector('#result');
let resetBtn = document.querySelector('#resetBtn');
let submitBtn = document.querySelector('#submitBtn');

// Funktion för att toggla mellan dark/lightmode onclick.
function changeMode() { 
    let body = document.body;
    let changeBtn = document.getElementById('changeBtn');
    body.classList.toggle("dark");
    changeBtn.textContent = body.classList.contains('dark') ? "Light mode" : "Dark mode"; // Använder ternary operator (aka WTF), classlist "dark" ändra knapptext till Light, annars dark.
};

// Funktion för submit-onclick
function submit () {
   
   let chosenAnswerArr = []; // deklarerar tom array för valda svarsalternativ
   let chosenAnswerRadio = document.querySelectorAll('input[type="radio"]:checked'); //variabel för radiobuttons
    chosenAnswerRadio.forEach((radio) => { // pushar in valda radiobuttons i svarsarray.
    chosenAnswerArr.push(radio.value);
    });


    let checkboxArrQ4 = []; // Tom array för valda svaralternativ checkbox fråga 4.
    let checkboxArrQ8 = []; // Tom array för valda svarsalternativ checkbox fråga 8.
    let checkboxQ4 = document.querySelectorAll('[name="question4"]');
    
    checkboxQ4.forEach((checkbox) => { // Loopar igenom fråga 4. 
        if(checkbox.checked && checkbox.value === 'correct'){ // Kontrollerar om checkbox är iklickad OCH värdet är lika med "correct".
        checkboxArrQ4.push(checkbox.value); // Om så är fallet pushas svaret in i array.
        }
    })
    if (checkboxArrQ4.length === 3) { // Kontrollerar om det finns 3 rätta svar i fråga 4-array.
        chosenAnswerArr.push('correct'); // Om så är fallet pushas ett rätt svar i gemensamma array.
    }

    let checkboxQ8 = document.querySelectorAll('[name="question8"]'); // Samma för fråga.8
    checkboxQ8.forEach((checkbox) => {
        if(checkbox.checked && checkbox.value === 'correct'){
        checkboxArrQ8.push(checkbox.value); 
        }
    })
    if (checkboxArrQ8.length === 3) {
        chosenAnswerArr.push('correct');
    }
    
    let correctAnswers = chosenAnswerArr.filter((answer) => { // filtrera ut alla rätta svar från array
     return answer === "correct";
    });
    correctAnswers.forEach((answer) =>{
    result++;                            // lägg till poäng i resultat för varje rätt svar.
    });
    chosenAnswerRadio.forEach((radio) => { // loopa igenom alla radioBtn-svar för att ändra färg på li beroende på rätt/fel svar.
        let radioLi = radio.closest('li'); //definerar listelementet närmast radioinput
    if (radio.value === "correct") {
        radioLi.style.backgroundColor = '#77DD77'; //om rätt svar - grön färg
    } else {
        radioLi.style.backgroundColor = '#d62121'; // annars röd färg
    }
    });

    // Räkna antal procent rätt/fel och visa olika text/färg beroende på resultat.
    let points = result / 10 ; // Delar resultatet med antal frågor för poäng
    if (points >= 0.75) { // Om poäng är lika med eller högre än 0.75 (75%)
    resultMessage.style.color = 'green';
    resultMessage.innerHTML = ("Grattis, du är en sann överlevare!" + " " + "Du fick" + " " + result + " " + "av 10 antal rätt.");
     } else if (points >= 0.5) { // Om poäng är lika med eller högre än 0.5 (50%)
    resultMessage.style.color = 'orange';
    resultMessage.innerHTML = ("Med lite tur överlever du kanske.." + " " + "Du fick" + " " + result + " " + "av 10 antal rätt.");
    } else { // Om poäng är mindre än 0.5 (50%)
    resultMessage.style.color = 'red';
    resultMessage.innerHTML = ("Du skulle inte överleva en dag!" + " " + "Du fick" + " " + result + " " + "av 10 antal rätt.");
    };

    changeColorCheck (checkboxQ4); // Kör funktion för att ändra bakgrundsfärg li beroende på rätt/fel svar.
    changeColorCheck (checkboxQ8); // Kör funktion för att ändra bakgrundsfärg li beroende på rätt/fel svar.
    disableInputs (); // Kör funktion för att disable alla inputs.
    
    submitBtn.style.display = 'none'; //Dölj submitBtn och byt ut mot resetBtn
    resetBtn.style.display = 'block';

};
  // funktion för att lägga grön/röd bakgrundsfärg på checkboxar då fler rätta svar krävs för grön bakgrundsfärg på li.
function changeColorCheck (checkboxes) {
    let numOfCorrect = 0; // variabel för att räkna antal rätt svar. 
    checkboxes.forEach((checkbox) => { //  Om checkbox är checkad och value är lika med correct, lägg till i array
        if (checkbox.checked && checkbox.value === 'correct') {
            numOfCorrect++;
        }
    });
    checkboxes.forEach((checkbox) => { // loopa igenom checkboxes
        let li = checkbox.closest('li'); // definera variabel för närmaste listelement
        if (checkbox.checked && numOfCorrect === 3) { // Om checkbox är checkad och antal "correct" är lika med 3.
            li.style.backgroundColor = "#77DD77"; // ändra färg på li till grön
        } else if (checkbox.checked) { // om checkbox är checkad men numOfCorrect inte innehåller 3 rätta svar.
            li.style.backgroundColor = '#d62121'; // ändra färg på li till röd
        }
    });
};
         
    
        

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
