var course = { name: 'CS572' };
function addLevel(level) {
    return function (course) {
        return {
            level: level,
            name: course.name
        };
    };
}
var decoratedCourse = addLevel(500)(course);
console.log(decoratedCourse);
