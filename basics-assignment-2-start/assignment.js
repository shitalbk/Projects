const task3Element = document.getElementById('task-3');

function one(){
  alert("Hello Everbody!!!");
}
one();

function two(name){
  alert(name);
}
two("Shital");

task3Element.addEventListener('click',one);

function three(str1, str2, str3){
  return str1 + str2 + str3;
}
const line = three('Hi ','there ','Shital');
alert(line);