// EXAMINE THE DOCEMENT OBJECT//

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

// var item= document.querySelector('.list-group-item:nth-child(2)');
// item.style.color='green';

// var titles= document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='Hello';
// var odd=document.querySelectorAll('li:nth-child(odd)');

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }
//PARENTNODE
// var itemlist=document.querySelector('#items')
// console.log(itemlist.parentNode)
// itemlist.parentNode.style.backgroundColor='gray'
// console.log(itemlist.parentNode.parentNode.parentNode)

//PARENTELEMENT
var itemlist=document.querySelector('#items')
// console.log(itemlist.parentElement)
// itemlist.parentElement.style.backgroundColor='gray'
// console.log(itemlist.parentElement.parentElement.parentElement)

//childNode
// console.log(itemlist.childNodes)

//children

// console.log(itemlist.children)
// itemlist.children[1].style.backgroundColor='yellow'

// console.log(itemlist.firstElementChild)
// itemlist.firstElementChild.textContent='Hello 1'

// console.log(itemlist.nextSibling)
// console.log(itemlist.nextElementSibling)

//create element

//create div

var newDiv=document.createElement('div')

// console.log(newDiv)
newDiv.className='Hello';

newDiv.id='Hello1'
newDiv.setAttribute('title','Hello div')

//add text content

var newDivText=document.createTextNode('Hello World')

newDiv.appendChild(newDivText);


var container=document.querySelector('header.container');
var h1=document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize='30px';
container.insertBefore(h1);
// container.insertAdjacentElement(h1,newDiv)



