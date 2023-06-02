 function getTask(){
    // the store room array
let list =[];

    // gets the value from input class
let task = document.querySelector('.input').value;

console.log(task)
// store my list in an array
list.push(task)
 

console.log(list)
// display the value in output
 document.querySelector('.output-list').innerHTML +=
 `
 <li>${task}</li>
 `
 }
 