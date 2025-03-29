function calculateBhaskara() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    clearErrors();

    let isValid = true;

    if (isNaN(a) || a === 0) {
        isValid = false;
        showError("a", "o valor de 'a' não pode ser nulo ou zero.");
    }

    if (isNaN(b)) {
        isValid = false;
        showError("b", "o valor de 'b' é obrigatório.");
    }

    if (isNaN(c)) {
        isValid = false;
        showError("c", "o valor de 'c' é obrigatório.");
    }

    if (isValid) {
        const delta = b * b - 4 * a * c;

        if (delta < 0) {
            document.getElementById("resultText").innerHTML = "Equação sem raízes reais.";
        } else {
            const sqrtDelta = Math.sqrt(delta);
            const x1 = (-b + sqrtDelta) / (2 * a);
            const x2 = (-b - sqrtDelta) / (2 * a);

            document.getElementById("resultText").innerHTML = `x1 = ${x1}, x2 = ${x2}`;
        }
    }
}

function showError(inputId, message) {
    const errorElement = document.getElementById(inputId + "Error");
    errorElement.textContent = message;
    document.getElementById(inputId).classList.add("error");
}

function clearErrors() {
    document.getElementById("aError").textContent = "";
    document.getElementById("bError").textContent = "";
    document.getElementById("cError").textContent = "";

    document.getElementById("a").classList.remove("error");
    document.getElementById("b").classList.remove("error");
    document.getElementById("c").classList.remove("error");
}