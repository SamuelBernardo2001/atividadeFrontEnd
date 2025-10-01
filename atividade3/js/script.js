const form = document.getElementById('form-cadastro'); // Seleciona o formulário

function validarCampos(nome, idade, cidade){
    if(!nome || !idade || !cidade){
        alert("Preencha todos os campos")
        mensagemErro.textContent = 'Todos os campos são obrigatórios!';
    return false
    }
}
