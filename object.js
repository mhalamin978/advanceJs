const student = [
    {id:21, name:'momin'},
    {id:23, name: 'fahim'},
    {id:52, name: 'mamun'},
    {id:71, name: 'munna'}
];

// const names=[];
// for(var i=0; i<student.length; i++){
// const name = student[i].name;
// names.push(name);
// };
// console.log(names);


// alt way
const names = student.map(s=> s.name);
const ids = student.map(s=> s.id);
console.log(ids);
console.log(names);

const bigger = student.filter (s=> s.id>40);
console.log(bigger);
