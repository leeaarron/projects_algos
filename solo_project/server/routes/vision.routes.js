const visionCtrl = require("../controllers/vision.controller");

module.exports = (app) => { //app as argument
        app.get("/api/healthcheck", visionCtrl.healthcheck);
        app.get("/api/visions", visionCtrl.getAllVisions);
        app.post("/api/visions", visionCtrl.addNewVision);
    };