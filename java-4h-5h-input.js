function printAlert() {
    alert('Hello Java 4H and 5H students!');
    alert('How are you doing today???');
}

function printAlertWithParameter(parameter) {
    alert(parameter)
}

function readInput() {
    //programmatically
    let input = document.getElementById('nameInput');
    let paragraph = document.createElement('p');
    paragraph.innerText = input.value;

    let body = document.body;

    body.appendChild(paragraph);
    input.value = "";
}

