let list = [];
function selectButton(name) {

    const playerName = document.getElementById(name).innerText;

    if (list.length < 5) {
        list.push(playerName);
        const listContainer = document.getElementById('list-container');

        const li = document.createElement('li');
        li.innerText = playerName;
        listContainer.appendChild(li);
    }
    else {
        alert("You can't add more than five players");
    }
}
