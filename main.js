import { dinos } from "./javascripts/helpers/dinoData.js"
import { printDinoCards } from "./javascripts/components/printDinoCard.js"
import { addDinoButton, dinoForm, navbar } from "./javascripts/components/navbar.js"

const init = () => {
    navbar()
    printDinoCards(dinos);
    // addDinoButton();
    dinoForm();
};

init ();