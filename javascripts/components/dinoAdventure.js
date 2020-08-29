import { printDinoCards } from './printDinoCard.js';
import { dinoAdventures } from '../helpers/dinoData.js'


const adventureRandomizer = () => {
  let randomAdventure = dinoAdventures[Math.floor(Math.random() * dinoAdventures.length)]
  return randomAdventure
};

const adventure = (index, item, array) => {
  $(`#adventure${index}`).click(() => {
    item.health -= 5;

    item.adventures.push({ timeStamp: new Date(), adventure: adventureRandomizer(dinoAdventures).title});
    printDinoCards(array);
  });
};

const adventureModal = (item, index) => {
    item.adventures.forEach((adventure, i) => {
        $(`#adventureInfo${index}`).append(`
        <tr>
            <td>${adventure.timeStamp}</>
            <td>${adventure.adventure}</td>
        </tr>
        `)
    })
};

export { adventure, adventureModal };