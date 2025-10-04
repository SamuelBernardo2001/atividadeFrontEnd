document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('texto'); // Seleciona o TextArea
    const contador = document.getElementById('contador');
    const limite = 100;

    function atualizarContador() {
        const comprimentoAtual = textarea.value.length; // Obtém o comprimento atual do texto
        contador.textContent = `Caracteres: ${comprimentoAtual} / ${limite}`; // Atualizar O Contador

        if (comprimentoAtual > limite) {
            contador.style.color = 'red'; // Muda a cor do contador para vermelho se o limite for excedido
            textarea.value = textarea.value.substring(0, limite);   // Limita o texto ao máximo permitido
        } else {
            contador.style.color = 'black';
        }
    }
});    // Garante que o DOM esteja carregado antes de executar o script