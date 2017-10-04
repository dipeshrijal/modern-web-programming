var library = [
    {
        prof: 'Asaad Saad', course: 'WAP', courseId: 'CS452'
    },
    {
        prof: 'Rakesh Shrestha', course: 'WAA', courseId: 'CS545'
    },
    {
        prof: 'Steve Nolle', course: 'SWE', courseId: 'CS425'
    }
];

let sorted = library.sort((a, b) => {
    if (a.course < b.course) {
        return -1;
    }
    if (a.course > b.course) {
        return 1;
    }
    return 0;
});

console.log(sorted);