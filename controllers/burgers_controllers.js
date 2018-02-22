const express = require('express');
const burger = require('../models/burger.js');
// const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    burger.getAll((burgersData) => {
        console.log(burgersData);
        res.render('index', {
            burgersData
        });
    });
});

router.post('/api/create', (req, res) => {
    burger.create(req.body.burgerName, () => {
        res.redirect('/');
    });
});

router.put('/api/update', (req, res) => {
    burger.update(req.body.burgerId, () => {
        res.redirect('/');
    });
});

router.delete('/api/delete', (req, res) => {
    burger.delete(req.body.burgerId, () => {
        res.redirect('/');
    });
});

module.exports = router;