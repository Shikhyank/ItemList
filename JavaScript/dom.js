//EXAMINE THE DOCEMENT OBJECT//

// console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// document.title=123
// console.log(document.all)

var items= document.getElementsByClassName('list-group-item');
console.log(items)
console.log(items[1])
items[1].textContent='Hello 2';
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='yellow';

for(var i=0;i<items.length;i++){

    items[i].style.backgroundColor='#f4f4f4';
}