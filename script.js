const resultDiv = document.querySelector(".box");

// adjective
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
function clicked(){
    resultDiv.innerHTML = `${randomValue} ${randomValue2} ${randomValue3}`;
}


