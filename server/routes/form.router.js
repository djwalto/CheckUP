const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "journal";`;
    pool
        .query(queryText)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log('Error completing GET details in formrouter', err);
            res.sendStatus(500);
        });

    /**
     * POST route template
     */
    router.post('/', (req, res) => {


        const queryText = `INSERT INTO "journal" ("feeling", "symptom")
                         VALUES ($1, $2);`;
        const data = req.body;
        pool
            .query(queryText, [
                data.feeling,
                data.symptoms,
            ])
            .then((response) => {
                res.sendStatus(201);
            })
            .catch((err) => {
                console.log(`Error adding new form, ${err}`);
                res.sendStatus(500);
            });
    });
});

module.exports = router;