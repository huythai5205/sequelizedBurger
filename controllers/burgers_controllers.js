const db = require('../models');


module.exports = function (app) {
    app.get('/', (req, res) => {
        db.Burger.findAll({}).then((burgersData) => [
            res.render('index', {
                burgersData
            })
        ]);
    });

    app.post('/api/create', (req, res) => {
        console.log("creating");
        console.log("creating");
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
        console.log("deleting");
        console.log(req.params.burgerId);
        db.Burger.destroy({
            where: {
                id: req.body.burgerId
            }
        }).then(
            res.redirect('/')
        )
    });
};