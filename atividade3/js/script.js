const form = document.getElementById('form-cadastro'); // Seleciona o formulário
const botaoCadastrar = document.getElementById('botao-cadastrar'); // Seleciona o botão
const mensagemErro = document.getElementById('mensagem-erro'); // Seleciona o elemento para erros

function validarCampos(nome, idade, cidade){
    if(!nome || !idade || !cidade){

        mensagemErro.textContent = 'Todos os campos são obrigatórios!';
    return false
    }
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
