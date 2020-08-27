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
    dinos.forEach((item, index) => {
        $('#kennel').append(`
        <div class="card m-2" style="width: 18rem;">
        <img class="card-img-top" src="${item.imageUrl}" alt="Card image cap">
        <div class="card-body">
          <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <div class="progress" id="progressBar-${item.id}">
              <div class="progress-bar progress-bar ${
                item.health > 50 ? "bg-success" : "bg-warning"
              } progress-bar-animated" style="width: ${item.health}%" id="progress-${item.id}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><p class="health-status">${item.health}%</p></div>
          </div>
          <div class="button-section-${item.id}" id="button-section-${item.id}">
              <button type="button" id="pet-${item.id}" class="btn btn-success">Pet</button>
              <button type="button" id="feed-${item.id}" class="btn btn-success">Feed</button>
              <button type="button" id="adventure-${item.id}" class="btn btn-info">Adventure</button>
              <button type="button1" id="delete-${item.id}" class="btn btn-danger">Delete</button>
              <div class="infoButton">
                <button type="button" id="info-${item.id}" class="btn btn-light" data-toggle="modal" data-target="#exampleModal-${item.id}">
                Info
                </button>
                </div>
              </div>
              </div>
        `)
    })
}

export { makeDinoCard, addDino }