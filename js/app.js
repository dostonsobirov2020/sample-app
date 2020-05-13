let name = prompt('What is your name?');
let age = prompt('How old are you?');

let obj = {
    name: name !== null ? name : 'Doston',
    age: age !== null ? +age : 18,
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

for (let i = 1; i <= 3; i++) {
    let subject = prompt(`Please, enter a subject name`),
        mark = prompt(`Please, enter your mark for ${subject}`);

    if (subject !== null && mark !== null) {
        obj.marks[subject] = +mark;
    } else {
        console.log('Invalid data entered');
    }
}

let countSubjects = 0;
let calculateTotal = 0;

for (let subject in obj.marks) {
    countSubjects++;
    calculateTotal += obj.marks[subject];
}

obj.averageMark = (calculateTotal / countSubjects).toFixed(2);

if (obj.averageMark < 40) {
    obj.finalResult = `${obj.name} have failed this academic year with ${obj.averageMark} credits`;
} else if (obj.averageMark >= 40 && obj.averageMark < 50) {
    obj.finalResult = `${obj.name} have graduated academic year with satisfactory results, ${obj.name} gained ${obj.averageMark} credits`;
} else if (obj.averageMark >= 50 && obj.averageMark < 70) {
    obj.finalResult = `${obj.name} have graduated academic year with good results, ${obj.name} gained ${obj.averageMark} credits`;
} else if (obj.averageMark >= 70) {
    obj.finalResult = `${obj.name} have graduated academic year with excellent results, ${obj.name} gained ${obj.averageMark} credits`;
} else {
    obj.finalResult = `Someting went wrong, please check results later`;
}

console.log(obj.finalResult);