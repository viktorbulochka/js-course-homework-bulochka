function interviewQuestion(profession) {
    return function (name) {
        if (profession === "designer") {
            return profession + ": " + name + " can you please explain what UX design is?"
        } else if (profession === "teacher") {
            return profession + ": What subject do you teach" + " " + name + "?"
        } else if (profession === "other") {
            return profession + ": Hello" + " " + name + ", what do you do?"
        }
        else {
            return "Profession value isn't set correctly"
        }
    };
}


console.log(interviewQuestion("teacher")("John"));