import { printDinoCards } from './printDinoCard.js';

const possibleAdventures = [
  {
    id: 'adventure1',
    title: 'BRAWL',
    healthHit: 50,
  },
  {
    id: 'adventure2',
    title: 'Cave exploration',
    healthHit: 10,
  },
  {
    id: 'adventure3',
    title: 'Ropes course',
    healthHit: 13,
  },
  {
    id: 'adventure4',
    title: 'Playing in traffic',
    healthHit: 3,
  },
  {
    id: 'adventure5',
    title: 'Baking',
    healthHit: 70,
  },
  {
    id: 'adventure6',
    title: 'Welding',
    healthHit: 4,
  },
  {
    id: 'adventure7',
    title: 'Underwater Basket Weaving',
    healthHit: 99,
  },
  {
    id: 'adventure8',
    title: 'Surfing',
    healthHit: 39,
  },
  {
    id: 'adventure9',
    title: 'Fishing',
    healthHit: 23,
  },
  {
    id: 'adventure10',
    title: 'Shot from a cannon',
    healthHit: 60,
  },
];

const randomAdventure = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const adventure = (index, item, array) => {
  $(`#adventure${index}`).click(() => {
    item.health -= 25;

    item.adventures.push({ timeStamp: new Date(), adventure: randomAdventure(possibleAdventures).title});
    printDinoCards(array);
  });
};

const adventureLog = (item, index) => {
    item.adventures.forEach((adventure, i) => {
        $(`#adventureInfo${index}`).append(`
        <tr>
            <td>${i + 1}</td>
            <td>${adventure.timeStamp}</td>
            <td>${adventure.adventure}</td>
        </tr>
        `)
    })
};

export { adventure, adventureLog };