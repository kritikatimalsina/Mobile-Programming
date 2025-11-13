function changeFontSize() {
    const size = document.getElementById("fontSize").value;
    const text = document.getElementById("text");
    if (size) {
        text.style.fontSize = size + "px";
    }
}

function changeFontStyle() {
    const style = document.getElementById("fontStyle").value;
    document.getElementById("text").style.fontFamily = style;
}

function changeImage() {
    const url = document.getElementById("imageUrl").value;
    if (url) {
        document.getElementById("displayImage").src = url;
    }
}

function addText() {
    const input = document.getElementById("newText").value;
    const container = document.getElementById("textContainer");
    if (input) {
        const newPara = document.createElement("p");
        newPara.textContent = input;
        container.appendChild(newPara);
        document.getElementById("newText").value = "";
    }
}

function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result = "";

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers!";
    } else {
        switch (operation) {
            case "add": result = num1 + num2; break;
            case "subtract": result = num1 - num2; break;
            case "multiply": result = num1 * num2; break;
            case "divide": 
                result = num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by zero!";
                break;
        }
    }
    document.getElementById("result").textContent = "Result: " + result;
}

  