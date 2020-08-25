const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    console.log(req.user.id);
    const queryText = `SELECT * FROM "journal" WHERE "journal".user_id=$1 ORDER BY "date" DESC;`;
    pool
        .query(queryText, [req.user.id])
        .then((response) => {
            res.send(response.rows);
            console.log(response.rows);
        })
        .catch((err) => {
            console.log('Error completing GET details in formrouter', err);
            res.sendStatus(500);
        });

    router.post('/', (req, res) => {
        const queryText = `INSERT INTO "journal" ("user_id", "date", "feeling", "symptom", "medication", "contact")
        VALUES ($1, $2, $3, $4, $5, $6);`;
        const data = req.body;
        pool
            .query(queryText, [
                data.user_id,
                data.date,
                data.feeling,
                data.symptoms,
                data.medication,
                data.contact,
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

router.delete('/:id', (req, res) => {
    console.log(req.params);
    console.log(req.params.id);
    const formId = req.params.id;
    console.log('Delete request for id', formId);
    let sqlText = 'DELETE FROM "journal" WHERE id=$1;';
    pool.query(sqlText, [formId])
        .then((result) => {
            console.log('Entry deleted');
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

router.put('/:id', (req, res) => {
    console.log(req.params);
    console.log(req.params.id);
    const sqlText = `UPDATE "journal" SET ("id", "date", "feeling", "symptom", "medication", "contact") = ($1, $2, $3, $4, $5, $6) WHERE "id" = $1`;
    pool.query(sqlText, [req.params.id, req.body.date, req.body.feeling, req.body.symptoms, req.body.medication, req.body.contact])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
})


module.exports = router;