import { getDinos } from '../helpers/dinoData.js'
import { printDinoCards } from  './printDinoCard.js'

const dinoForm = () => {
  $('#add-dino').click(() => {
    $('#dinoFormDOM').html(`
            <form class="m-3">
                <div class="row">
                    <div class="col">
                        <label for="inputName" style="color:black">Name</label>
                        <input type="text reset" class="form-control" id="inputName" placeholder="Name">
                    </div>
                    <div class="col">
                        <label for="inputType" style="color:black">Type</label>
                        <input type="text" class="form-control" id="inputType" placeholder="Chicken">
                    </div>
                    <div class="form-group">
                        <label for="inputAge" style="color:black">Age</label>
                        <input type="text" class="form-control" id="inputAge" placeholder="12">
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col">
                        <label for="inputOwner" style="color:black">Owner</label>
                        <input type="text" class="form-control" id="inputOwner" placeholder="Don Johnson">
                    </div>
                    <div class="col">
                        <label for="inputImg" style="color:black">Image URL</label>
                        <input type="url" class="form-control" id="inputImg" placeholder="https://">
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <button id="submitNewDino" class="btn btn-danger" type="button">Submit</button>
                </div>
            </form>
        `);
    
  });
};

const submitDinoForm = () => {
  $('#submitNewDino').click(() => {
    let newDino = {
      name: $('#inputName').val(),
      type: $('#inputType').val(),
      age: $('#inputAge').val(),
      owner: $('#inputOwner').val(),
      adventures: [],
      health: 100,
      imageUrl: $('#inputImg').val(),
    };
    getDinos().push(newDino);
    printDinoCards(getDinos());
    document.getElementById("dinoFormDOM").reset();
  });
};

submitDinoForm();

export { dinoForm };
