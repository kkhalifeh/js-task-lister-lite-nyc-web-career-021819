document.addEventListener("DOMContentLoaded", () => {
  const mainForm = document.querySelector('#create-task-form');
  const textField = document.querySelector('#new-task-description');
  const createButton = document.querySelector('#new-task-button')
  const tasks = document.querySelector('#tasks')

  mainForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log('e', e.value);
    const textField = document.querySelector('#new-task-description');
    console.log('textField.value', textField.value);
    // tasks.innerHTML = '<li>'+textField.value+'</li>';
    var task = document.createElement('li')
     tasks.appendChild(task)
     task.innerText = `${textField.value}`

     // Create a button
     const h1 = document.querySelector('#lists-h1');
     var newButton =  document.createElement('button');
     newButton.innerText = 'X'
     newButton.id = `${textField.value}`
     newButton.setAttribute('data-description', `${textField.value}`);
     console.log('newButton', newButton);
     tasks.insertBefore(newButton, h1)

     newButton.addEventListener('click', function (e) {
       console.log('task', task);
       task.remove();
       newButton.remove();
     });
  });
});
