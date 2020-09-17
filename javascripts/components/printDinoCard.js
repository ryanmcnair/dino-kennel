import { makeDino } from './dinoCard.js';
import { feedDino, petDino, deleteDino } from './dinoActions.js';
import { dinoForm } from './navbar.js';
import { adventure, adventureModal } from './dinoAdventure.js'


const printDinoCards = (array) => {
    $('#kennel').html('')
    $('#hospital').html('')
    $('#graveyard').html('')
    array.forEach((item, index) => {
      if (item.health >= 50) {
        $('#kennel').append(makeDino(item, index));
      } else if (item.health < 50 && item.health > 0) {
        $('#hospital').append(makeDino(item, index));
      } else {
        $('#graveyard').append(makeDino(item, index));
      }
      feedDino(index, item, array)
      petDino(index, item, array)
      adventure(index, item, array)
      adventureModal(item, index)
      deleteDino(array, index)
      dinoForm();
    });
  };
  



export { printDinoCards }