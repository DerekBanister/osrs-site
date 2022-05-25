const router = require('express').Router();
const path = require('path');
const hiscores = require('osrs-json-hiscores');

router.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

router.get('/toppage', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/html/topplayers.html'))
);

router.get("/stats/:rsn", (req, res) => {
    hiscores
        .getStats(req.params.rsn)
        .then((response) => res.send(response))
        .catch((err) => {
            res.status(404).send({ status: 404, error: err });
        });
});

router.get("/info/top", (req, res) => {
    hiscores
        .getSkillPage('overall')
        .then((response) => res.send(response))
        .catch((err) => {
            res.status(404).send({ status: 404, error: err });
        });
});

module.exports = router;