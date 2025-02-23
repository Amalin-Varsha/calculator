function Solve(val) {
    var v = document.getElementById("res");
    v.value += val;
}

function Result() {
    var num1 = document.getElementById("res").value;
    try {
        // Replacing 'x' with '*' for multiplication and '^' with '**' for exponentiation
        var result = num1.replace(/x/g, "*").replace(/\^/g, "**");
        // Evaluating the expression
        var num2 = eval(result);
        document.getElementById("res").value = num2;
    } catch (e) {
        document.getElementById("res").value = "Error";
    }
}

function Clear() {
    var inp = document.getElementById("res");
    inp.value = "";
}

function Back() {
    var ev = document.getElementById("res");
    ev.value = ev.value.slice(0, -1);
}

function Exponentiate() {
    var v = document.getElementById("res");
    if (v.value.includes("^")) {
        v.value = v.value.replace("^", "**");
    } else {
        v.value += "^";
    }
}

// Preventing typing and pasting into the text box
document.getElementById("res").addEventListener("keydown", function(event) {
    event.preventDefault(); // Prevent any keyboard input into the input field
});

document.getElementById("res").addEventListener("input", function(event) {
    event.preventDefault(); // Prevent pasting or any input into the text box
});

document.addEventListener("keydown", function(event) {
    const key = event.key;
    const validKeys = "0123456789+-*/.^";
    if (validKeys.includes(key)) {
        Solve(key === "*" ? "x" : key);
    } else if (key === "Enter") {
        Result();
    } else if (key === "Backspace") {
        Back();
    } else if (key.toLowerCase() === "c") {
        Clear();
    }
});

