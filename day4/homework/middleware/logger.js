const fs = require("fs");
const logger = function (req, res, next) {
    // console.log(req.method);
    // console.log(req.url);
    // const readable = fs.createReadStream(__dirname + '/greet.txt',
    //     { encoding: "utf8", highWaterMark : 2 * 1024 }
    // );

    fs.appendFile('logs/customaccess.log', 'data to append \n', (err) => {
        if (err) throw err;
    });

    next();
};


module.exports = logger;