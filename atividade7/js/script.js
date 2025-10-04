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

            const especieUrl = pokemonEscolhido.species.url; // URL para obter informações da espécie
            const especieResposta = await fetch(especieUrl);  // Faz a requisição para a URL da espécie
            const especieDados = await especieResposta.json(); // Converte a resposta para JSON

            // criando um objetivo mas simplificado para armazenar as informaçoes que queremos do pokemon
            pokemonEscolhido = {
                nome: dados.name.toLowerCase(), // Nome do Pokémon em minúsculas
                tipo: dados.types.map(t => t.types.name), // Array de tipos do Pokémon, Lista de tipos (pode ter 2 tipos)
                geracao: especieDados.generation.name, // Geração do Pokémon
                imagem: dados.sprites.front_default // Imagem do Pokémon
            }

             // Mostra a imagem como "sombra" (preto)
            nomePokemon.textContent = "???";
            imagemPokemon.src = pokemonEscolhido.imagem;
            imagemPokemon.style.display = "block";
            imagemPokemon.style.filter = "brightness(0)"; // Escurece a imagem (sombra)

        } catch (erro) {
            console.error('Erro:', erro); // Log de erro no console
        }

    }

    //criando um evento de clique para verificar o nome do pokemon
    document.getElementById("botao-verificar-nome").addEventListener("click", () => {
        if(!pokemonEscolhido) return; // Se nenhum Pokémon foi escolhido, sai da função

        if (inputNome.value.toLowerCase() === pokemonEscolhido.nome) {
            // Compara o nome inserido com o nome do Pokémon
            msgNome.textContent = "Correto!"; // Mensagem de acerto
            nomePokemon.textContent = pokemonEscolhido.nome; // Mostra o nome do Pokémon
            imagemPokemon.style.filter = "brightness(1)"; // Mostra a imagem em cores
            etapaGeracao.classList.remove("hidden");   // Mostra a etapa da geração
            etapaNome.classList.add("hidden");   // Esconde a etapa do nome
        } else {
           // Se errou, esconde tudo e força gerar outro Pokémon
            msgNome.textContent = "❌ Errou! Gere outro Pokémon."; // Mensagem de erro
            etapaNome.classList.add("hidden");  // Esconde a etapa do nome
            imagemPokemon.style.display = "none"; // Esconde a imagem
            pokemonEscolhido = null; // Reseta o Pokémon escolhido
        }
    });

    //criando um evento de clique para verificar a geraçao do pokemon
    document.getElementById("botao-verificar-geracao").addEventListener("click", () => {
        if(!pokemonEscolhido) return; // Se nenhum Pokémon foi escolhido, sai da função

        const respostaUsuario = inputGeracao.value.toLowerCase().trim(); // Obtém a resposta do usuário
        const geracaoPokemon = converterGeracao(pokemonEscolhido.geracao); // Converte a geração do Pokémon para um formato comparável

         if (respostaUsuario === geracaoPokemon || respostaUsuario === pokemonEscolhido.geracao) { // Compara a resposta com a geração do Pokémon
             msgGeracao.textContent = "✅ Acertou a geração!";  // Mensagem de acerto
            etapaTipo.classList.remove("hidden"); // Libera próxima etapa
            }else {
                 msgGeracao.textContent = `❌ Geração errada! Era ${geracaoPokemon}`; 
    }
    });

// Função para normalizar a geração (a API retorna "generation-iii", etc)
// Aqui convertemos para número para facilitar a resposta do usuário
function converterGeracao(g) {
  const map = {
    "generation-i": "1",
    "generation-ii": "2",
    "generation-iii": "3",
    "generation-iv": "4",
    "generation-v": "5",
    "generation-vi": "6",
    "generation-vii": "7",
    "generation-viii": "8",
    "generation-ix": "9"
  };
  return map[g] || g; // Retorna o número se existir no mapa, senão retorna o valor original
}

    //criando um evento de clique para verificar o tipo do pokemon
    document.getElementById("botao-pokemon-tipo").addEventListener("click", () => {
        if(!pokemonEscolhido) return; // Se nenhum Pokémon foi escolhido, sai da função
        
        const respostaUsuario = inputTipo.value.toLowerCase().trim();   // Obtém a resposta do usuário
        const tiposPokemon = pokemonEscolhido.tipo; // Lista de tipos do Pokémon
        let acertou = false;    // Flag para verificar se acertou

        
        for(let t of (tiposPokemon)){

        }
    });


});