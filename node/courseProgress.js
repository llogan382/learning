var courses = [
['The hard parts servers and node', 5, 16],
['API design in Node v3', 3, 34],
['Server side GraphQL in Node', 3, 24],
['advanced GraphQL v2', 3, 25];


var electives = [
    ['Intro to MongoDB', 3, 23],
    ['Asynch Programming in JS with RX.js', 9, 38]
    ['Javascript the New Hard Parts', 4, 48],
    ['Rethinking asynch JS', 6, 22],

];

// Get total number of minutes
let minutes = [];

// const map2 = map1.map(x =>
//     `This is x:  ${x}`);


function addMins(arr){
    var sum = arr.reduce(function(a, b){
        return a + b;
    }, 0);
    console.log(sum);
}
function showVals(element, index, array){
    minutes.push(element[2]);
    addMins(minutes);

    return minutes;
}

courses.forEach(showVals);



