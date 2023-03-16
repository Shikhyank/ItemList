//EXAMINE THE DOCEMENT OBJECT//

// console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// document.title=123
// console.log(document.all)

// var items= document.getElementsByTagName('li');
// console.log(li)
// console.log(li[1])
// li[1].textContent='Hello 2';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='yellow';

// for(var i=0;i<li.length;i++){

//     li[i].style.backgroundColor='#f4f4f4';
// }

var item= document.querySelector('.list-group-item:nth-child(2)');
item.style.color='green';

// var titles= document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='Hello';
var odd=document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}