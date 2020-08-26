const navigation = () => {
    $('#navbar').html(`
    <div class="jumbotron">
        <h1 class="display-4">DINO KENNEL</h1>
        <p class="lead">Drop off your dino by adding him to the kennel by clicking the button below. Dinos love to be petted and fed! Be sure to take good care of them or they'll end up in the graveyard.</p>
        <hr class="my-4">
        <p></p>
        <a class="btn btn-warning btn-lg" role="button" id="add-dino">Add a dino!</a>
    </div>`)
};


const addDinoButton = () => {
    $('#add-dino').on("click", () => {
        dinoForm();
});
};

const dinoForm = () => {
    $('#dinoFormDOM').html(`
    <form>
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
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    `)
}

export { navigation, addDinoButton }