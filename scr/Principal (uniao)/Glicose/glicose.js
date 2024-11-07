





function cadPessoa(data, consulta, medico, clinica){

    var tb = document.getElementById("tbPessoas");  // encontra a tabela tbPessoas
    var qtdLinhas = tb.rows.length; //le a qtd de linhas
    var linha = tb.insertRow(qtdLinhas);  // insere uma linha

    var cellCodigo = linha.insertCell(0);
    var cellData = linha.insertCell(1);
    var cellConsulta = linha.insertCell(2);
    var cellMedico = linha.insertCell(3)
    var cellClinica = linha.insertCell(4);
    // var cellAcao = linha.insertCell(5);


    cellCodigo.innerHTML = qtdLinhas ;
    cellData.innerHTML = data;
    cellConsulta.innerHTML = consulta ;
    cellMedico.innerHTML = medico;
    cellClinica.innerHTML = clinica;
    // cellAcao.innerHTML = acao;

    // Limpa os campos de entrada

    if (!data || !consulta || !clinica || !acao) {
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("Formulário enviado com sucesso!");
        // Aqui você pode adicionar o código para enviar o formulário ou processar os dados
    }

}