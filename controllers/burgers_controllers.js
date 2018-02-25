const db = require('../models');


module.exports = function (app) {
    app.get('/', (req, res) => {
        db.Burger.findAll({}).then((burgersData) => [
            res.render('index', burgersData)
            // res.redirect('/')
        ]);
    });

    app.post('/api/create', (req, res) => {
        db.Burger.create({
            burger_name: req.body.burgerName
        }).then(
            res.redirect('/')
        )
    });

    app.put('/api/update', (req, res) => {
        db.Burger.update({
            devoured: true,
            customer_name: req.body.customerName
        }, {
            where: {
                id: req.body.burgerId
            }
        }).then(
            res.redirect('/')
        )
    });

    app.delete('/api/delete', (req, res) => {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(
            res.redirect('/')
        )
    });
};