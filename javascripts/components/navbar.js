const navigation = () => {
    $('#navbar').html(`
    <div class="jumbotron">
        <h1 class="display-4">DINO KENNEL</h1>
        <p class="lead">Drop off your dino by adding him to the kennel by clicking the button below. Dinos love to be petted and fed! Be sure to take good care of them or they'll end up in the graveyard.</p>
        <hr class="my-4">
        <p></p>
        <a class="btn btn-warning btn-lg" href="#" role="button">Add a dino!</a>
    </div>`)
}

export { navigation }