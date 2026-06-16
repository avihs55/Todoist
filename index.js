document.querySelector('#submit-btn').disabled = true;

document.querySelector('#task').onkeyup = function() {
    if (document.querySelector('#task').value.length === 0) {
        document.querySelector('#submit-btn').disabled = true;
    } else {
        document.querySelector('#submit-btn').disabled = false;
    }
}

document.querySelector('form').onsubmit = function() {

    let task = document.querySelector('#task').value;


    const li = document.createElement('li');
    li.innerHTML = task;

    document.querySelector('.task-list').append(li);

    document.querySelector('#task').value = '';
    document.querySelector('#submit-btn').disabled = true;
    return false;
}