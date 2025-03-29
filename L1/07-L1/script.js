function validateForm() {
    const nameInput = document.getElementById("name");
    const birthInput = document.getElementById("birth");
    const emailInput = document.getElementById("email");

    const nameError = document.getElementById("nameError");
    const birthError = document.getElementById("birthError");
    const emailError = document.getElementById("emailError");

    let isValid = true;

    // Validação do Nome
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Nome é obrigatório!";
        nameInput.classList.add("error");
        isValid = false;
    } else {
        nameError.textContent = "";
        nameInput.classList.remove("error");
    }

    // Validação da Data de Nascimento
    if (birthInput.value === "") {
        birthError.textContent = "Data de nascimento é obrigatória!";
        birthInput.classList.add("error");
        isValid = false;
    } else {
        birthError.textContent = "";        
        birthInput.classList.remove("error");
    }

    // Validação do Email    
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email é obrigatório!";
        emailInput.classList.add("error");
        isValid = false;
    } else {
        emailError.textContent = "";
        emailInput.classList.remove("error");
    }

    if (isValid) {
        alert("Formulário enviado com sucesso!");
    }
}