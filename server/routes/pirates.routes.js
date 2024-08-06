const PirateController = require("../controllers/pirate.controller");

module.exports = app => {
    app.get("/api/pirates/", PirateController.findAllPirates);
    app.get("/api/pirate/:id", PirateController.findOnePirate);
    app.put("/api/pirate/:id", PirateController.updateExistingPirate);
    app.post("/api/pirate/new", PirateController.createPirate);
    app.delete("/api/pirate/delete/:id", PirateController.deleteAnExistingPirate);
};