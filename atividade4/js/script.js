const imagemTema = document.getElementById('imagem-tema'); // Seleciona a imagem do tema
const body = document.body; // Seleciona o corpo do documento

const imagemSol = 'https://img.icons8.com/color/96/000000/sun.png'; // URL da imagem do sol
const imagemLua = 'https://img.icons8.com/color/96/000000/moon.png'; // URL da imagem da lua


function alterarTema() {
body.classList.toggle('tema-escuro'); // Alterna a classe do corpo para tema escuro
if (body.classList.contains('tema-escuro')) {
    imagemTema.src = imagemLua; // Muda a imagem para a lua
    imagemTema.alt = 'Lua'; // Atualiza o texto alternativo para Lua
} else {
    imagemTema.src = imagemSol; // Muda a imagem para o sol
    imagemTema.alt = 'Sol'; // Atualiza o texto alternativo para Sol
}
}

body.classList.add('tema-claro'); // Define o tema claro como padrão