var image = {
    width:100,
    height:400,
    title:'Cool image',
    };

function multiplyNumeric(object) {
    for (let key in image) {
        if (typeof image[key] == 'number') {
            image[key] *= 2;
        }
    }
}

multiplyNumeric(image);

console.log(image);

