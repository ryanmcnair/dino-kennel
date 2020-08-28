import { printDinoCards } from "./printDinoCard.js"

const feedDino = (index, item, array) => {
    $(`#feed${index}`).click(() => {
      item.health += 5;
      printDinoCards(array);
    });
  };

  const petDino = (index, item, array) => {
    $(`#pet${index}`).click(() => {
      item.health += 5;
      printDinoCards(array);
    });
  };

const deleteDino = (array, index) => {
    $(`#delete${index}`).click( () => {
        array.splice(index, 1)
        printDinoCards(array)
    })
}

export { feedDino, petDino, deleteDino }