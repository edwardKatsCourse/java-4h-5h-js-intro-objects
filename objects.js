function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    let parameter = 15 /*number*/;

    this.toString /*Function*/ = function () {
        return this.firstName + " " + this.lastName + " " + this.age;
    };

    this.getAge = function () {
        return this.age;
    };
}

function printPerson() {
    let firstNameInput = document.getElementById('firstName').value;
    let lastNameInput = document.getElementById('lastName').value;
    let ageInput = document.getElementById('age').value;

    let person = new Person(firstNameInput, lastNameInput, ageInput);

    alert('person 1 -> ' + person.toString());

    let person2 = {
        "firstName": firstNameInput,
        lastName: lastNameInput,
        age: ageInput,
        toString: function () {
            return this.firstName + " " + this.lastName + " " + this.age;
        }
    };
    //Java Script Object Notation = JSON

    alert('person2 -> ' + person2.toString());
    console.log(person['firstName']);
    console.log(person.firstName);
}

let globalLet = 'abc';
var globalVar = 'abc';


function letVsVar() {

    //I. Hoisting - телега впереди лошади

    // console.log(name); //Error
    // let name = 'a';

    //II. Global declaration (for entire world)
    // console.log("let -> " + window.globalLet);
    // console.log("var -> " + window.globalVar);

    //III. Re-Declaration
    //Works (while shouldn't)
    // var name = 'jack';
    // var name = 'anna';
    // console.log(name);

    //Does NOT work
    // let name = 'jack';
    // let name = 'anna';
    // console.log(name);

    //IV. Scoping
    // var i = 5;
    // for (var i = 0; i < 10; i++) {
    //     // some statements
    // }
    // console.log(i); //10

    let i = 5;
    for (let i = 0; i < 10; i++) {
        // some statements
    }
    console.log(i);
}

letVsVar();