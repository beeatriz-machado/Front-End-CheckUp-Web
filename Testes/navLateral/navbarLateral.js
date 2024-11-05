function highlightButton(button) {
    // Remove a classe de todos os botões
    document.querySelectorAll('.navbar-menu button').forEach(btn => {
        btn.classList.remove('button-active');
    });

    // Adiciona a classe ao botão clicado
    button.classList.add('button-active');
}
