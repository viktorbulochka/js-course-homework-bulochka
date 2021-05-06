var taskCompleted = {
    'Anna':29,
    'Serg':35,
    'Elena':10,
    'Anton':99
};

var i;
var comparedValue = -Infinity;

for (i in taskCompleted) {
    if(taskCompleted[i] > comparedValue) {
        comparedValue = taskCompleted[i];
        key = i;
    }
}

console.log(key);