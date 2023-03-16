// const person={
//     firstName:'deep',
//     lastName:'kumari',
//     age:'22',
//     hobbies:['dancing','workout'],
//     address:{
//         street:'jatav mohalla',
//         city:'delhi',
//         knownnearplace:'sarita vihar'
//     }

// }
// console.log(person.address);

// const todos=[{
//     id:1,
//     text:'take out trash',
//     isCompleted:true
// },
// {
//     id:2,
//     text:'meeting with my',
//     isCompleted:true
// },
// {
//     id:3,
//     text:'dentist opt',
//     isCompleted:false
// }];
// console.log(todos[1].text)

// const todoJson=JSON.stringify(todos);
// console.log(todoJson);

// for(let i=0;i<todos.length;i++){
//     console.log(todos[i])
// }

// for(let todo of todos){
//     console.log(todo)
// }
// todos.forEach(function(deep)
// {
//     console.log(deep.text)
// })
function Person(firstName,lastName,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=new Date(dob);
    this.getBirthYear =function(){
        return this.dob.getFullYear();
    }
   
    this.getFullName=function(){
        return`${this.firstName} ${this.lastName}`;
    }
}
const p1=new Person('deep','dee','15-04-2002');
console.log(p1.getFullName())
console.log(p1.getBirthYear())
console.log(p1)