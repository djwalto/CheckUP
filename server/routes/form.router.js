const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    res.send(req.form);
});

/**
 * POST route template
 */
router.post('/form', (req, res) => {
    const feeling = req.body.feeling;
    const symptoms = req.body.symptoms;
    console.log(req.body);
    let queryText = `INSERT INTO "journal" ("feeling", "symptom")
                         VALUES ($1, $2);`;
    pool
        .query(queryText, [
            feeling,
            symptoms,
        ])
        .then(() => {
            res.sendStatus(201);
        })
        .catch(() => {
            console.log(`Error adding new form`, error);
            res.sendStatus(500);
        });
});


module.exports = router;