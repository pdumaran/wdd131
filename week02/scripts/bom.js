const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // Filled in the blank to link to <ul id="list">

const li = document.createElement('li');

const deleteButton = document.createElement('button');

li.textContent = "Alma 5";

deleteButton.textContent = '❌';
deleteButton.setAttribute('aria-label', 'Remove Alma 5');
deleteButton.classList.add('delete');

li.append(deleteButton);

list.append(li);