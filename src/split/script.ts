const calculateButton = document.querySelector("#btn") as HTMLButtonElement;
const deletButton = document.querySelector('#delet') as HTMLButtonElement;


  // - Alle Eingabenfelden auslesen
  const person1Input = document.querySelector("#person1") as HTMLInputElement
  const person2Input = document.querySelector("#person2") as HTMLInputElement
  const person3Input = document.querySelector("#person3") as HTMLInputElement

 // - Die Resultate für die Differenzen
 const resultPerson1 = document.querySelector("#person1-diff span") as HTMLSpanElement;
 const resultPerson2 = document.querySelector("#person2-diff span") as HTMLSpanElement;
 const resultPerson3 = document.querySelector("#person3-diff span") as HTMLSpanElement;


// ------------ FUNKTION für die Split-Berechnung 
/**
 * This function calculates the split for 3 people.
 * It takes the 3 values from the input fields, calculates the total and the average,
 * and then calculates the difference for each person.
 * The result is displayed in the corresponding span fields.
 */
function calculate() {

  // - Alle Eingabenfelden auslesen
  const person1 = Number(person1Input.value);
  const person2 = Number(person2Input.value);
  const person3 = Number(person3Input.value);

  // - brechnung der gesamtbeiträre, die dann durch 3 gerechnen werden
  const gesamtbetrag = person1 + person2 + person3;
  const durchschnitt = gesamtbetrag / 3;

  // - hier werden die Differenzen berechnet
  const differenzPerson1 = person1 - durchschnitt;
  const differenzPerson2 = person2 - durchschnitt;
  const differenzPerson3 = person3 - durchschnitt;

  // - hier wird die Ausgabe erzeugt
  if (differenzPerson1 > 0) {
    resultPerson1.innerText = `Bekommt ${differenzPerson1.toFixed(2)} € zurück.`;
  } else if (differenzPerson1 < 0) {
    resultPerson1.innerText = `Muss ${Math.abs(differenzPerson1).toFixed(2)} € zahlen.`;
  } else {
    resultPerson1.innerText = "Ist ausgeglichen";
  }

  if (differenzPerson2 > 0) {
    resultPerson2.innerText = `Bekommt ${differenzPerson2.toFixed(2)} € zurück.`;
  } else if (differenzPerson2 < 0) {
    resultPerson2.innerText = `Muss ${Math.abs(differenzPerson2).toFixed(2)} € zahlen.`;
  } else {
    resultPerson2.innerText = "Ist ausgeglichen";
  }

  if (differenzPerson3 > 0) {
    resultPerson3.innerText = `Bekommt ${differenzPerson3.toFixed(2)} € zurück.`;
  } else if (differenzPerson3 < 0) {
    resultPerson3.innerText = `Muss ${Math.abs(differenzPerson3).toFixed(2)} € zahlen.`;
  } else {
    resultPerson3.innerText = "Ist ausgeglichen";
  }

  
}

function delet() {
  person1Input.value = '';
  person2Input.value = '';
  person3Input.value = '';
  resultPerson1.innerText = '';
  resultPerson2.innerText = '';
  resultPerson3.innerText = '';
}

calculateButton.onclick = calculate
deletButton.onclick = delet

