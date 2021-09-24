//Task One
//First Style
const listOne = document.getElementById('task-1');
listOne.style.backgroundColor = 'black';
listOne.style.color = 'white';

//Second Style 
const listTwo = document.querySelector('#task-1');
listTwo.style.backgroundColor = 'green';
listTwo.style.color = 'white';

// Task Two
//First Style
const docTitle = document.querySelector('#title');
docTitle.textContent = "Assignment-Solved!!";

//Second Two
const docHead = document.head;
const docTitleOne = document.head.querySelector('#title');
docTitleOne.textContent = "Assignment-Solved!!";

//Task Three
const headingOne = document.getElementsByTagName('h1');
headingOne[0].textContent = "Assignment - Solved!!";