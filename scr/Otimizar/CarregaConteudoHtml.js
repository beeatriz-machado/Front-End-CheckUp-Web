    // Função para carregar o conteúdo de um arquivo HTML
    function loadHTML(id, file) {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                document.getElementById(id).innerHTML = data;
            });
    }