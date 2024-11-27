function cadastrar(item1, item2, item3, local) {
    const item1 = document.getElementsByName(item1)[0].value;
    const item2 = document.getElementsByName(item2)[0].value;
    const item3 = document.getElementsByName(item3)[0].value;

    // Validação simples
    if (!item1 || !item2 || !item3) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    const dados = {
      item1: item1,
      item2: item2,
      item3: item3
    };

    fetch(local, {  // Substitua pela URL correta da API
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer <seu-token-aqui>'  // Se necessário
      },
      body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
      alert('Cadastro efetuado com sucesso');
      document.getElementsByName(item1)[0].value = '';
      document.getElementsByName(item1)[0].value = '';
      document.getElementsByName(item)[0].value = '';
    })
    .catch(error => {
      console.error('Erro ao cadastrar:', error);
      alert('Erro ao cadastrar');
    });
  }
