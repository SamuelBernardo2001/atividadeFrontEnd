const form = document.getElementById('form-cadastro'); // Seleciona o formulário
const botaoCadastrar = document.getElementById('botao-cadastrar'); // Seleciona o botão
const mensagemErro = document.getElementById('mensagem-erro'); // Seleciona o elemento para erros
const corpoTabela = document.getElementById('corpo-tabela'); // Seleciona o corpo da tabela

function validarCampos(nome, idade, cidade){
    if(!nome || !idade || !cidade){
        alert("Preencha todos os campos")
        mensagemErro.textContent = 'Todos os campos são obrigatórios!';
    return false
    }

    if (isNaN(idade) || idade < 0) {
            mensagemErro.textContent = 'Idade deve ser um número válido!'; // Valida idade
            return false;
        }
        mensagemErro.textContent = ''; // limpa mensagens
    return true; // garante que retorna verdadeiro
}

botaoCadastrar.addEventListener('click', () => {
    const nome = document.getElementById('nome').value.trim(); // recebendo o nome
    const idade = document.getElementById('idade').value.trim(); // recebendo a idade
    const cidade = document.getElementById('cidade').value.trim(); // recebendo a cidade
   
    if(validarCampos(nome, idade, cidade)){ // Verifica se os campos são válidos
        alert("Cadastrado com sucesso")
        form.reset(); // Limpa o formulário após cadastro
    }
}
)

function adicionarLinha(nome, idade, cidade) {
    const novaLinha = document.createElement('tr'); // Cria uma nova linha
    novaLinha.innerHTML = `
            <td>${nome}</td> <!-- Coluna para nome -->
            <td>${idade}</td> <!-- Coluna para idade -->
            <td>${cidade}</td> <!-- Coluna para cidade -->
        `; // Adiciona as colunas à linha
        corpoTabela.appendChild(novaLinha); // Adiciona a linha ao corpo da tabela
}
