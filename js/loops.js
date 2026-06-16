let forText = "";

for (let i = 4; i >= 0; i--) {

    forText += i + "<br>";

}

document.getElementById("for-loop").innerHTML = forText;



let whileText = "";

let j = 0;

while (j < 5) {

    whileText += j + "<br>";

    j++;

}

document.getElementById("while-loop").innerHTML = whileText;



let doWhileText = "";

let k = 0;

do {

    doWhileText += k + "<br>";

    k++;

} while (k < 5);

document.getElementById("dowhile-loop").innerHTML = doWhileText;



let forInText = "";

const person = { name: "Resham", age: 20, Address: "Mudiit, Dolores, Abra" };

for (const key in person) {

    forInText += key + ": " + person[key] + "<br>";

}

document.getElementById("forin-loop").innerHTML = forInText;



let forOfText = "";

const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {

    forOfText += fruit + "<br>";

}

document.getElementById("forof-loop").innerHTML = forOfText;



let forEachText = "";

fruits.forEach((fruit, index) => {

    forEachText += index + ": " + fruit + "<br>";

});

document.getElementById("foreach-loop").innerHTML = forEachText;

