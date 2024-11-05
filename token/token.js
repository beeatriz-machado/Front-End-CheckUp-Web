
// const fonte = {
//     "Poppins"
// };

const estiloBotao = {
    fontFamily:"Poppins",
    // fontSize:'100px',
    width: '100%',
    padding: '1%',
    borderRadius: '50px',
    border: '2px solid',
    color: '#fff',
    fontSize: '18px',
    cursor: 'pointer',
    marginBottom: '3%',
    background: 'linear-gradient(90deg, #2856f9, #00d9ff)',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  };
  const botao = document.querySelector('.botao');

// Aplica o estilo do token ao botão
Object.assign(botao.style, estiloBotao);

// Adiciona efeito de hover
botao.addEventListener('mouseover', () => {
  botao.style.transform = 'scale(1.05)';
});

botao.addEventListener('mouseout', () => {
  botao.style.transform = 'scale(1)';
});
