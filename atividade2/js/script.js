let tasklist = [];

function addTask() {
    const taskInput = document.getElementById('taskInput').value.trim();;

    if (taskInput === '') {
        alert('Digite uma Lista De Tarefas!');
        return;
    }

    tasklist.push(criaTarefa(taskInput));

    document.getElementById('taskList').innerHTML = tasklist.join('');
}

function criaTarefa(valor) {
    alert('Tarefa Adicionada Com Sucesso!');
    return `<li>${valor} <button onclick="removeTask(${valor})">Remover</button></li>`;
}