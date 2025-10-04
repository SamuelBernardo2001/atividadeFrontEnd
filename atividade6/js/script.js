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
        const minimo = parseInt(document.getElementById('minimo').value); // Obtém o valor mínimo
        const maximo = parseInt(document.getElementById('maximo').value); // Obtém o valor máximo

        if(isNaN(quantidade) || isNaN(minimo) || isNaN(maximo)){
            alert("Preencha todos os campos corretamente"); // Valida se os campos estão preenchidos corretamente
        } else if (minimo >= maximo) {
            alert("O valor minimo deve ser menor que o maximo"); // Valida se o valor mínimo é menor que o máximo
        } else if (quantidade > (maximo - minimo + 1)) {
            alert("A quantidade de números solicitada excede o intervalo disponível."); // Valida se a quantidade solicitada é possível dentro do intervalo
        } else {
            const numeros = sortearNumeros(minimo, maximo, quantidade); // Realiza o sorteio dos números
            resultado.textContent = `Números sorteados: ${numeros.join(', ')}`; // Exibe os números sorteados
        }
    });
});