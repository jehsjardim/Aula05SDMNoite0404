
module.exports = function(app,config) {
  const controllerFactory = require("../controllers/bandas-rock")
  const controller = controllerFactory();

    app
        .route(config.get("server.path_root") + "bandas")
      .get(controller.showList);

};