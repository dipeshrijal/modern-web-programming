const course = {name : 'CS572'};

function addLevel(level) {
    return function (course) {
        return {
            level : level,
            name: course.name
        }
    }
}

const decoratedCourse = addLevel(500)(course);

console.log(decoratedCourse);
