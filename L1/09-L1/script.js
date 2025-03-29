// Função para adicionar um novo item à lista
function addItem() {
    const newFruit = document.getElementById("newFruit").value;

    // Verifica se o campo não está vazio
    if (newFruit.trim() !== "") {
        const list = document.getElementById("fruitList");

        // Cria um novo item de lista
        const li = document.createElement("li");

        // Cria o texto do novo item
        li.innerHTML = `${newFruit} <button onclick="removeItem(this)">Remover</button>`;

        // Adiciona o item à lista
        list.appendChild(li);

        // Limpa o campo de entrada
        document.getElementById("newFruit").value = "";
    } else {
        alert("Por favor, insira o nome de uma fruta.");
    }
}

// Função para remover um item da lista
function removeItem(button) {
    const li = button.parentElement;  // Pega o <li> do botão
    li.remove();  // Remove o <li> da lista
}