// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
// }

// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
// }

// Função para adicionar mais botões dinamicamente
function addNavButton() {

    // function abrirPopup() {
        document.getElementById("popup").style.display = "flex";
    // }
    

}
function fecharPopup() {
    document.getElementById("popup").style.display = "none";
    }

function confirmUpload (){
    var btnName = document.getElementById("btnName").value;
    if (btnName.trim() !== "") {
        var newButton = document.createElement("button"); // Cria o novo botão (elemento <a>)
        newButton.href = "#";
        newButton.textContent = btnName;
        newButton.classList.add("nav-btn"); // Adiciona a classe 'nav-btn' ao botão

        document.getElementById("mySidenav").appendChild(newButton); // Adiciona o novo botão à barra lateral
        
        document.getElementById("popup").style.display = "none";
        // newButton.textContent = "";

    
        } else {
        alert("Por favor, insira um nome válido.");
    
    
}
}