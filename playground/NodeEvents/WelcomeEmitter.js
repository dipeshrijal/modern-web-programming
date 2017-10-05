const EventEmitter = require('events');

class Welcome extends EventEmitter {

    constructor() {
        super();
        this.welcome = "hello";
    }


    visit() {
        console.log(this.welcome);
        this.emit("greet");
    }

}

const welcome = new Welcome();

welcome.on("greet", function () {
    console.log("greet");
});

welcome.visit();
