
const numberInputValue = document.querySelector('#betrag') as HTMLInputElement;
const personenInputValue = document.querySelector('#personen') as HTMLInputElement;
const serviceInputValue = document.querySelector('#service') as HTMLInputElement;
const button = document.querySelector('#btn') as HTMLButtonElement;

const deletButton = document.querySelector('#delet') as HTMLButtonElement;

// - querySelector nutzt die gleichen kombinierten Selektoren wie CSS
// - Sucht ein <span>, das sich innerhalb des Elements mit der ID "trinkgeld" befindet -> kann sogar verschachtelt sein
const trinkgeldSpan = document.querySelector('#trinkgeld span') as HTMLSpanElement;
const gesamtBetragSpan = document.querySelector('#gesamtBetrag span') as HTMLSpanElement;
const proPersonSpan = document.querySelector('#proPeron span') as HTMLSpanElement;


function calculate() {

  const betrag = Number(numberInputValue.value)
  const personen = Number(personenInputValue.value);
  const service = Number(serviceInputValue.value);
  
//- Berechnungen
  const trinkgeld = betrag * (service / 100); // Trinkgeldbetrag
  const gesamtBetrag = betrag + trinkgeld; // Gesamtbetrag inkl. Trinkgeld
  const betragProPerson = gesamtBetrag / personen; // Betrag pro Person


  // - fixt das "." und wandelt es in eine "," um
  const trinkgeldFixed = trinkgeld.toFixed(2).replace('.', ',') + ' €';
  const gesamtBetragFixed = gesamtBetrag.toFixed(2).replace('.', ',') + ' €';
  const betragProPersonFixed = betragProPerson.toFixed(2).replace('.', ',') + ' €';

  // - sezt den Text (Betrag) in den angegebenen <span>
  trinkgeldSpan.innerText = trinkgeldFixed;
  gesamtBetragSpan.innerText = gesamtBetragFixed;
  proPersonSpan.innerText = betragProPersonFixed;
 
}

function delet() {
  numberInputValue.value = '';
  personenInputValue.value = '';
  serviceInputValue.value = '';
  trinkgeldSpan.innerText = '';
  gesamtBetragSpan.innerText = '';
  proPersonSpan.innerText = '';
}

button.onclick = calculate;
deletButton.onclick = delet
