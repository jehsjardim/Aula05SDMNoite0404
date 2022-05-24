module.exports = function() {
    const bandasRockDB = require("../data/bandas-rock.json")

    const controller = {
        showList: function (req,res) {
            res.status(200).json(bandasRockDB);
        },
        add: function (req,res) {
            console.log("recebi requisição...");
            let id = req.body.id;
            let name = req.body.name;
            let country = req.body.country;
            let style = req.body.style;
            bandasRockDB.bandasrock.data.push({ id, name, country, style });
            res.status(200).json(bandasRockDB);
        },
        update: function (req,res) {
            console.log("recebi requisição...",req.body);
            res.status(200).json({status: "OK"});
            },
    };

    return controller;
}