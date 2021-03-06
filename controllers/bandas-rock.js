const bandasRockDB = require("../data/bandas-rock.json");
module.exports = function() {
    const bandasRockDB = require("../data/bandas-rock.json")

    const controller = {
        showList: function (req,res) {
            res.status(200).json(bandasRockDB);
        },

        add: function (req,res) {
            console.log("recebi requisição...");
            let {id, name, country, style} = req.body;
            bandasRockDB.bandasrock.data[id] = { id, name, country, style };
            res.status(200).json(bandasRockDB);
        },

        update: function (req,res) {
            console.log("recebi requisição...", req.body);
            let {id, name, country, style} = req.body.id;
            bandasRockDB.bandasrock.data[id] = {id, name, country, style};
            res.status(200).json(bandasRockDB);
        },

           remove: function (req,res) {
            console.log("recebi requisição...",req.body);
            let id = req.body.id;
            delete bandasRockDB.bandasrock.data[id];
            res.status(200).json(bandasRockDB);
        },
    };

    return controller;
}