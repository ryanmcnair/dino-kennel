import { dinos } from '../helpers/dinoData.js'
import { printDinoCards } from  './printDinoCard.js'

const navbar = () => {
    $('#navbar').html(
      `<div style="background:transparent !important" class="jumbotron">
        <h1 class="display-4">DINO KENNEL</h1>
        <p class="lead">Drop off your dino by adding her to the kennel, clicking the button below. If your dino is good, feed her or give her a pet! Be sure to take good care of them or they'll end up in the graveyard.</p>
        <hr class="my-4">
        <p></p>
        <a class="btn btn-warning btn-lg" role="button" id="add-dino">Add a dino!</a>
    </div>`
    )
}

const addDinoButton = () => {
  $('#add-dino').click((e) => {
      e.preventDefault()
      dinoForm();
})
}

// $(document).ready(function () {
//   #('#add-dino').click(function (){
//     dinoForm();
//   })
// })

const dinoForm = () => {
    $('#dinoFormDOM').html(
        `<form>
          <div class="form-group">
            <label for="formGroupExampleInput">Dino name:</label>
            <input type="text" class="form-control" id="dinoName" aria-describedby="emailHelp">
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Dino age:</label>
            <input type="text" class="form-control" id="dinoAge" aria-describedby="emailHelp">
          </div>
         <div class="form-group">
            <label for="formGroupExampleInput">Dino type:</label>
            <input type="text" class="form-control" id="dinoType" aria-describedby="emailHelp">
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Owner:</label>
            <input type="text" class="form-control" id="dinoOwner" aria-describedby="emailHelp">
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Image URL:</label>
            <input type="text" class="form-control" id="dinoImage" aria-describedby="emailHelp">
          </div>
        <button type="submit-new" class="btn btn-primary">Submit</button>
      </form>`)
      
      submitDinoForm();
};

const submitDinoForm = () => {
  $('#submit-new').click(() => {
    let newDino = {
      name: $('#dinoName').val(),
      type: $('#dinoType').val(),
      age: $('#dinoAge').val(),
      owner: $('#dinoOwner').val(),
      adventures: [],
      health: 100,
      imageUrl: $('#dinoImage').val(),
    };
    dinos.push(newDino);
    printDinoCards(dinos)
  });
};


export { addDinoButton, dinoForm, navbar }
