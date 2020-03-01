var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var todos = JSON.parse(localStorage.getItem('list_TODOS')) || [];

function renderTODOS() {
    //limpa a lista//
    listElement.innerHTML = '';

    for (item of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(item);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');


        var pos = todos.indexOf(item);
        linkElement.setAttribute('onclick', 'deleteTODO(' + pos + ')');

        linkElement.setAttribute('href', '#');
        linkElement.appendChild(linkText);



        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTODOS();

function addTODO() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    saveTODOS();
    renderTODOS();
}

buttonElement.onclick = addTODO;

function deleteTODO(pos) {
    //remove uma posicao do array
    todos.splice(pos);
    saveTODOS();
    renderTODOS();
}

function saveTODOS() {
    localStorage.setItem('list_TODOS', JSON.stringify(todos));
}