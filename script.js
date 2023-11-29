const resultDiv = document.querySelector(".span");


// Without Repitition Method (simple method)
   

let obj1 = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}
let obj2 = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
};
let obj3 = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
};


var ran1 = Math.floor(Math.random() * 3) + 1;
var ran2 = Math.floor(Math.random() * 3) + 1;
var ran3 = Math.floor(Math.random() * 3) + 1;


console.log(obj1[ran1] + " " + obj2[ran2] + " " + obj3[ran3]);


function clicked() {
    resultDiv.innerHTML = obj1[ran1] + " " + obj2[ran2] + " " + obj3[ran3];
}

function closed(){
    //resultDiv.innerHTML = " ";
    location.reload();
}

//------------X---------------------X-----------------------X------------------


// With repitition Method

/* // adjective
let adj = {
    a: "Crazy",
    b: "Amazing",
    c: "Fire"
};
let adjArray = Object.keys(adj);
let randomAdjIndex = Math.floor(Math.random() * adjArray.length);
let randomKey = adjArray[randomAdjIndex]
let randomValue = adj[randomKey];
console.log(randomValue);


// shop name
let name = {
    a: "Engine",
    b: "Food",
    c: "Garments"
};
let nameArray = Object.keys(name);
let randomNameIndex = Math.floor(Math.random() * nameArray.length);
let randomKey2 = nameArray[randomNameIndex]
let randomValue2 = name[randomKey2];
console.log(randomValue2);


// another name
let anotherName = {
    a: "Bros",
    b: "Limited",
    c: "Hub"
};
let anotherNameArray = Object.keys(anotherName);
let randomAnotherIndex = Math.floor(Math.random() * anotherNameArray.length);
let randomKey3 = anotherNameArray[randomAnotherIndex]
let randomValue3 = anotherName[randomKey3];
console.log(randomValue3);


// result
function clicked() {
    resultDiv.innerHTML = `${randomValue} ${randomValue2} ${randomValue3}`;
} */

