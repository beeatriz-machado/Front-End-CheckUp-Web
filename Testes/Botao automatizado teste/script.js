function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Função para adicionar mais botões dinamicamente
function addNavButton() {
    var btnName = document.getElementById("btnName").value;

    if (btnName.trim() !== "") {
        var newButton = document.createElement("a"); // Cria o novo botão (elemento <a>)
        newButton.href = "#";
        newButton.textContent = btnName;
        document.getElementById("mySidenav").appendChild(newButton); // Adiciona o novo botão à barra lateral
    } else {
        alert("Please enter a valid button name.");
    }
}
