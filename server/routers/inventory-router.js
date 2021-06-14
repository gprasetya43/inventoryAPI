var inventoriesRouter = require('express').Router();
var inventoriesData = require('../data/inventory-data');
var _ = require('lodash');

var inventories = inventoriesData;
var id = 12;

var updateId = function (req, res, next) {
    console.log(req.body);
    if (!req.body.id) {
        id++;
        req.body.id = id + '';
    }
    next();
};

inventoriesRouter.param('id', function (req, res, next, id) {
    var inventory = _.find(inventories, {id: id});
    if (inventory) {
        req.inventory = inventory;
        next();
    } else {
        res.json({"error": "Id not found"});
    }
});

inventoriesRouter.get('/', function (req, res) {
    res.json(inventories);
});

inventoriesRouter.get('/:id', function (req, res) {
    var inventory = req.inventory;
    res.json(inventory || {});
});

inventoriesRouter.post('/', updateId, function (req, res) {
    var inventory = req.body;

    inventories.push(inventory);
    res.status(201).json(inventory || {});
});

inventoriesRouter.put('/:id', function (req, res) {
    var update = req.body;

    if (update.id) {
        delete update.id;
    }

    var inventory = _.findIndex(inventories, {id: req.params.id});

    if (!inventories[inventory]) {
        res.send();
    } else {
        var updatedinventory = _.assign(inventories[inventory], update);
        res.json(updatedinventory);
    }
});

inventoriesRouter.delete('/:id', function (req, res) {
    var inventory = _.findIndex(inventories, {id: req.params.id});
    inventories.splice(inventory, 1);

    res.json(req.inventory);
});

// Error handler
inventoriesRouter.use(function (err, req, res, next) {

    if (err) {
        res.status(500).send(err);
    }

});

module.exports = inventoriesRouter;