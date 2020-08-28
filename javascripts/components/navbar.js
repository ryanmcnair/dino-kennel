import { dinos } from '../helpers/dinoData.js'
import { printDinoCards } from  './printDinoCard.js'

const addDinoButton = () => {
  $('#add-dino').on('click', () => {
      dinoForm();
})
}

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
    dinos().push(newDino);
    printDinoCards(dinos())
    dinoForm();
  });
};


export { addDinoButton, dinoForm }
