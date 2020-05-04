// #1
console.log(hello);                                   
var hello = 'world'; 
// var hello;
// console.log(hello)=> error
// hello='world'

// #2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);    
}
//var needle = 'haystack;
// run the function test(); --> definition
// var needle = 'magnet';
// console.log(needle); -->magnet

// #3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan = 'super cool';
// function never called and so global var still applies
// console.log(brendan); -->super cool

// #4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food = 'chicken';
// console.log(food); --> chicken
// function eat()--> reassigns global var food = half-chicken
// consol.log(food);-->half-chicken

// #5
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// mean is not a function, it is a variable

// #6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// console.log(genre); -->undefined
// rewind();
// console.log(genre); -->rock
// console.log(genre); -->r&B
// colsole.log(genre); -->disco

// #7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// console.log(dojo); -->san jose
// learn();
// console.log(dojo);-->Seattle
// Console.log(dojo);--> burbank
// console.log(dojo);-->san jose


// #8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// console.log(makeDojo("Chicago", 65));-->{name: Chicago, students: 65, hiring: true }
//console.log(makeDojo("Berkley", 0)); "closed for now"