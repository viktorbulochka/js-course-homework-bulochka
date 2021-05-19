function variableGrid(value) {
    for (var i = 0; i < value; i++) {
        var whiteSpace = ""
        for (var j = 0; j < value; j++) {
            whiteSpace += ((i + j) % 2 ? "#" : " ");
        }
        console.log(whiteSpace);
    }
}
variableGrid(4);
