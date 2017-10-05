// class Emitter {
//     constructor() {
//         this.events = {};
//     }
//
//     on(type, listener) {
//         this.events[type]  = this.events[type] || [];
//         this.events[type].push(listener);
//
//     }
//
//     emit(type) {
//         if (this.events[type]) {
//             this.events[type].forEach(listener => {
//                 listener();
//             })
//         }
//     }
// }

const Emitter = require('events');

const emitter  = new Emitter();

emitter.on('start', function () {
    console.log("hello");
});

emitter.on('start', function () {
    console.log("hello1");
});

emitter.emit('start');