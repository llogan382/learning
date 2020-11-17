var courses = [
['Intro to Node', 4, 50],
['The hard parts servers and node', 5, 16],
['Digging into Node', 4, 0],
['API design in Node v3', 3, 34],
['Server side GraphQL in Node', 3, 24],
['Full Stack for Frontend Engineers', 6, 19]
];


var electives = [
    ['Advanced graphql', 3, 25],
    ['Rethinking asynch JS', 6, 22]
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

