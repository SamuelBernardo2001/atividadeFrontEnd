document.addEventListener('DOMContentLoaded', () => {

    const botaoPokemon = document.getElementById('botao-pokemon');  // Seleciona o botão
    const nomePokemon = document.getElementById('nome-pokemon');
    const imagemPokemon = document.getElementById('imagem-pokemon');

    const etapaNome = document.getElementById("etapas-pokemon-nome");
    const etapaGeracao = document.getElementById("etapa-pokemon-geracao");
    const etapaTipo = document.getElementById("etapa-pokemon-tipo");

    const inputNome = document.getElementById("resposta-nome");
    const inputGeracao = document.getElementById("resposta-geracao");
    const inputTipo = document.getElementById("resposta-tipo");

    const msgNome = document.getElementById("mensagem-nome");
    const msgGeracao = document.getElementById("mensagem-geracao");
    const msgTipo = document.getElementById("mensagem-tipo");

    let pokemonEscolhido = null;    // Variável para armazenar o Pokémon escolhido

    async function buscarPokemon() {  
        msgNome.textContent = "";   // Limpa mensagens anteriores
        msgGeracao.textContent = "";    // Limpa mensagens anteriores
        msgTipo.textContent = "";   // Limpa mensagens anteriores

        etapaNome.classList.remove("hidden");   // Mostra a etapa do nome para o usuário primeiro inicia com o nome
        etapaGeracao.classList.add("hidden");   // Esconde as outras etapas para so aparece quando o usuario acertar o nome
        etapaTipo.classList.add("hidden");  // Esconde as outras etapas para so aparece quando o usuario acertar o nome e geraçao


    }
});