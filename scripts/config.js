function openPlayerConfig(event) {
    debugger
    // const selectedPlayerId = +event.target.dataset.playerid;  // +'1' => 1
    // const selectedPlayerId = +event.target.dataset['playerid'];  // +'1' => 1
     // editedPlayer = event.target.dataset.playerid;  // +'1' => 1
    // editedPlayer = selectedPlayerId;
    editedPlayer =  +event.target.dataset.playerid;
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {

    event.preventDefault();
    const formData = new FormData(event.target);

    const enteredPlayerName = formData.get('playerName').trim(); // '   MAX Schwarz  ' -> 'MAX Schwarz'
    // console.log(enteredPlayer);

    if (!enteredPlayerName) { // enteredPlayerName === ''
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!';
        return;
    }
    debugger
     const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    // const updatedPlayerDataElement = document.getElementById('player-1-data');


    debugger
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;


    // if (editedPlayer === 1) {
    //     players[0].name = enteredPlayerName;
    // } else {
    //     players[1].name = enteredPlayerName;
    // }
    players[editedPlayer - 1].name = enteredPlayerName;

    closePlayerConfig();
}