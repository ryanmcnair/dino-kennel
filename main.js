import { dinos } from "./javascripts/helpers/dinoData.js"
import { printDinoCards } from "./javascripts/components/printDinoCard.js"

const init = () => {
    printDinoCards(dinos);
};

init ();