import { dinos } from "../helpers/dinoData.js"

const addDino = () => {
    const name = $('#dinoName').val();
    const age = $('#dinoAge').val();
    const type = $('#dinoType').val();
    const owner = $('#dinoOwner').val ();
    const imageURL = $('#dinoImage').val();

    dinos.push ({
        name: name,
        type: type,
        age: age,
        owner: owner,
        imageUrl: imageURL
    });

    printDino(dinos);

    $('#dinoName').val('');
    $('#dinoAge').val('');
    $('#dinoType').val('');
    $('#dinoOwner').val('');
    $('#dinoImage').val('');

  };

const makeDinoCard = () => {
    $('#kennel').html("");
    dinos.forEach((item) => {
        $('#kennel').append(`
        <div class="card" style="width: 18rem;">
          <div class="img-container" style="background-image: url(${item.imageUrl})">
          </div>
              
              <div class="card-body">
                <h2 class="card-title">${item.name}</h2>
                <p class="card-text"></p>
              </div>
             
          </div>
        `)
    })
}

export { makeDinoCard, addDino }