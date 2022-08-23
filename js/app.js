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

document.getElementById('calculate').addEventListener('click', function () {

    const perPlayer = getInputFieldValueById('perBudget');

    const list = document.getElementsByTagName('li').length;

    const totalPlayerExpense = perPlayer * list;

    setTextElementValueById('expense', totalPlayerExpense);
})

document.getElementById('calculate-total')
    .addEventListener('click', function () {

        const manager = getInputFieldValueById('manager-field');

        const coach = getInputFieldValueById('coach-field');

        const playerTotalCost = document.getElementById('expense').innerText;

        const total = parseFloat(playerTotalCost) + manager + coach;
        setTextElementValueById('total-cost', total);
    })