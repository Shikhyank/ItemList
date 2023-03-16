//EXAMINE THE DOCEMENT OBJECT//

// console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// document.title=123
// console.log(document.all)

var items= document.getElementsByTagName('li');
console.log(li)
console.log(li[1])
li[1].textContent='Hello 2';
li[1].style.fontWeight='bold';
li[1].style.backgroundColor='yellow';

for(var i=0;i<li.length;i++){

    li[i].style.backgroundColor='#f4f4f4';
}