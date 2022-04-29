const task3Element = document.getElementById('task-3');

function simplyAlert() {
  alert('Hi michel');
}

function alertWithParameter(name) {
  alert(name);
}

simplyAlert();
alertWithParameter('Max');

task3Element.addEventListener('click', simplyAlert);

function helloWorldAndMichell(hello, world, michell) {
  return hello + ' ' + world + ' and ' + michell;
}
alert(helloWorldAndMichell('Hello', 'world', 'Michell'));
