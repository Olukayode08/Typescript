import newStudent, { personName, sayHello, type Student} from './tutorialThree'

sayHello('Bem')
console.log(personName);
console.log(newStudent);

const anotherStudent: Student = {
    name: 'Benson',
    age: 22
}

console.log(anotherStudent);

