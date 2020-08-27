import { navigation, addDinoButton } from "./javascripts/components/navbar.js"
import { makeDinoCard } from "./javascripts/components/dinoCard.js";

const init = () => {
    navigation();
    addDinoButton();
    makeDinoCard();
};

init ();