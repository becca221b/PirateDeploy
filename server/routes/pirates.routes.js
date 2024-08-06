const PirateController = require("../controllers/pirate.controller");

module.exports = app => {
    app.get("https://piratesapp.onrender.com/pirates/", PirateController.findAllPirates);
    app.get("https://piratesapp.onrender.com/pirate/:id", PirateController.findOnePirate);
    app.put("https://piratesapp.onrender.com/pirate/:id", PirateController.updateExistingPirate);
    app.post("https://piratesapp.onrender.com/pirate/new", PirateController.createPirate);
    app.delete("https://piratesapp.onrender.com/pirate/delete/:id", PirateController.deleteAnExistingPirate);
};