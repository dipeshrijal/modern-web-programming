const express = require("express");
const router = express.Router();

const cds = [];


router.get('/', function (req, res) {
    res.send(cds);
});

router.post('/', function (req, res) {
    req.body.id = cds.length + 1;
    cds.push(req.body);
    res.sendStatus(200);
});

router.put('/:id', function (req, res) {
    let cd = {};
    for (let i = 0; i < cds.length; i ++) {
        if (cds[i].id === + req.params.id) {
            cd = cds[i];
            break;
        }
    }

    if (cd) {
        cd.id = cd.id;
        cd.name = req.body.name || cd.name;
        cd.description = req.body.description || cd.description;
    }


    res.send(cd);
});

router.delete('/:id',function (req, res) {
    for (let i = 0; i < cds.length; i ++) {
        if (cds[i].id === + req.params.id) {
            cds.splice(i, 1);
            break;
        }
    }
});


module.exports = router;