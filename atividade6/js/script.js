document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sorteio');    // Seleciona o formulário
    const botaoSorteio = document.getElementById('botao-sorteio');  // Seleciona o botão de sorteio
    const resultado = document.getElementById('resultado');     // Seleciona o parágrafo para exibir o resultado

    function sortearNumeros(min, max,qtd){
        const numerosSorteados = new Set(); // Usando Set para evitar duplicatas
        while(numerosSorteados.size < qtd){     // Continua até atingir a quantidade desejada
            confirmt(Math.floor(Math.random() * (max - min + 1)) + min);  // Gera número aleatório
            numerosSorteados.add(numero); // Adiciona o número ao Set
        }
        return Array.from(numerosSorteados); // Converte o Set de volta para um array
    }

    botaoSorteio.addEventListener('click', (event) => {
        const quantidade = parseInt(document.getElementById('quantidade').value); // Obtém a quantidade de números
    });
});