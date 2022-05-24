const router = require('express').Router();
const path = require('path');
const hiscores = require('osrs-json-hiscores');

router.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

router.get('/results', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/html/results.html'))
);

router.get("/stats/:rsn", (req, res) => {
    hiscores
        .getStats(req.params.rsn)
        .then((response) => res.send(response))
        .catch((err) => {
            res.status(404).send({ status: 404, error: err });
        });
});

module.exports = router;