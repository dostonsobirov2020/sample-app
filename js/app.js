let name = prompt('What is your name?');
let age = prompt('How old are you?');

let obj = {
    name: name,
    age: +age,
    hobbies: [],
    marks: {},
    friends: []
};

// let subject1 = prompt('Please, enter subject name');
// let mark1 = prompt(`Please, enter your mark for ${subject1}`);
// let subject2 = prompt('Please, enter subject name');
// let mark2 = prompt(`Please, enter your mark for ${subject2}`);

// obj.marks[subject1] = +mark1;
// obj.marks[subject2] = +mark2;

for (let i = 1; i < 3; i++) {
    let subject = prompt(`Please, enter a subject name`),
        mark = prompt(`Please, enter your mark for ${subject}`);

    obj.marks[subject] = mark;
}

for (let prop in obj.marks) {
    console.log(prop + ' - ' + obj.marks[prop]);
}