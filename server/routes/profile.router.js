const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "profile";`;
    pool
        .query(queryText)
        .then((response) => {

            res.send(response.rows);
        })
        .catch((err) => {
            console.log('Error completing GET details in profileRouter', err);
            res.sendStatus(500);
        });
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/', (req, res, next) => {
    console.log(req.body);
    const queryText = 'INSERT INTO "profile" ("user_id", "profile_name") VALUES ($1, $2) RETURNING id';
    const data = req.body;
    pool
        .query(queryText, [
            data.user_id,
            data.profile_name,
        ])
        .then(() => res.sendStatus(201))
        .catch(() => res.sendStatus(500));
});

// // Handles login form authenticate/login POST
// // userStrategy.authenticate('local') is middleware that we run on this route
// // this middleware will run our POST if successful
// // this middleware will send a 404 if not successful
// router.post('/login', userStrategy.authenticate('local'), (req, res) => {
//     res.sendStatus(200);
// });

// // clear all server session information about this user
// router.post('/logout', (req, res) => {
//     // Use passport's built-in method to log out the user
//     req.logout();
//     res.sendStatus(200);
// });

module.exports = router;
