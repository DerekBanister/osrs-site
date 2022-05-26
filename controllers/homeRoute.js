const router = require('express').Router();
const path = require('path');
const hiscores = require('osrs-json-hiscores');

//send homepage to root route
router.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);
//send topplayers.html to /toppage endpoint
router.get('/toppage', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/html/topplayers.html'))
);
//get player stats, with input rsn
router.get("/stats/:rsn", (req, res) => {
    hiscores
        .getStats(req.params.rsn)
        .then((response) => res.send(response))
        .catch((err) => {
            res.status(404).send({ status: 404, error: err });
        });
});
//get top players (25) using osrs-json-hiscores methods
//refer to documentation in readme on how to use osrs-json-hiscores 
router.get("/info/top", (req, res) => {
    hiscores
        .getSkillPage('overall')
        .then((response) => res.send(response))
        .catch((err) => {
            res.status(404).send({ status: 404, error: err });
        });
});

module.exports = router;