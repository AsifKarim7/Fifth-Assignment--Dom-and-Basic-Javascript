let list = [];
function selectButton(name, button) {

    const playerName = document.getElementById(name).innerText;

    if (list.length < 5) {
        list.push(playerName);
        const listContainer = document.getElementById('list-container');

        const li = document.createElement('li');
        li.innerText = playerName;
        listContainer.appendChild(li);
        li.style.padding = '20px 0px 0px 20px';

        const playerButton = document.getElementById(button);
        playerButton.disabled = true;

    }
    else {
        alert("You can't add more than five players");
    }
}
