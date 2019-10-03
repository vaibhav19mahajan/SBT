const repo = require("../repo/user.repo");

exports.findAll = (req, res) => {
    repo.findAll((data) => {
        res.status(200);
        res.send(data);
    }, (err) => {
        console.log(err);
        res.status(500);
        res.send("Could't retrieve data.");
    });
};

exports.findById = (req, res) => {
    let id = req.params.id;
    repo.findById(id, (data) => {
        res.status(200);
        res.send(data);
    }, (err) => {
        console.log(err);
        res.status(404);
        res.end();
    });

};

exports.create = (req, res) => {
    repo.create(req.body, (data) => {
        res.status(200);
        res.send(data);
    }, (err) => {
        console.log(err);
        res.status(500);
        res.send("Error creating the data.");
    });
};

exports.update = (req, res) => {
    repo.update(req.body, (data) => {
        res.status(200);
        res.send(data);
    }, (err) => {
        console.log(err);
        res.status(500);
        res.send("Error updating the data.");
    });
};

exports.delete = (req, res) => {
    repo.delete(req.params.id, (data) => {
        res.status(200);
        res.end();
    }, (err) => {
        console.log(err);
        res.status(500);
        res.send("Error deleting the data.");
    });

};