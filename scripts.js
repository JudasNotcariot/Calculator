function clearResult() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    let current = document.getElementById("result").value;
    document.getElementById("result").value = current.slice(0, -1);
}

function appendNumber(number) {
    document.getElementById("result").value += number;
}

function calculateResult() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = eval(result);
}
