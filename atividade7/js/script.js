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

        const idAleatorio = Math.floor(Math.random() * 898) + 1; // Gera um ID aleatório entre 1 e 898
        const url = `https://pokeapi.co/api/v2/pokemon/${idAleatorio}`; // URL da API do Pokémon

        try {
            const resposta = await fetch(url); // Faz a requisição para a API
            if (!resposta.ok) { // Verifica se a resposta foi bem-sucedida
                throw new Error('Erro ao buscar o Pokémon');
            }
            const dados = await resposta.json(); // Converte a resposta para JSON
            pokemonEscolhido = dados; // Armazena os dados do Pokémon escolhido

            nomePokemon.textContent = "???"; // Oculta o nome do Pokémon inicialmente
            imagemPokemon.src = dados.sprites.front_default; // Define a imagem do Pokémon
            imagemPokemon.alt = dados.name; // Define o texto alternativo da imagem

        } catch (erro) {
        }

    }
});