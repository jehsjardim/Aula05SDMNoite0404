
module.exports = function() {
    const bandasRockDB = require("../data/bandas-rock.json")

    const controller = {
        showList: function (req,res) {
            res.status(200).json(bandasRockDB);
        }

    }

    return controller;
}