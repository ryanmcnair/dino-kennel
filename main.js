import { dinos } from "./javascripts/helpers/dinoData.js"
import { printDinoCards } from "./javascripts/components/printDinoCard.js"
import { addDinoButton } from "./javascripts/components/navbar.js"

const init = () => {
    printDinoCards(dinos);
};

init ();