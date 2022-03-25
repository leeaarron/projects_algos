const goalCtrl = require("../controllers/goal.controller");

module.exports = (app) => { //app as argument
        app.get("/api/healthcheck", goalCtrl.healthcheck); 
        app.post("/api/goal", goalCtrl.addNewGoal);
        app.get("/api/goal", goalCtrl.getAllGoals);
        app.get("/api/goal/:id", goalCtrl.getGoalById);
        app.delete("/api/goal/:id", goalCtrl.deleteGoal);
        app.put("/api/goal/:id", goalCtrl.updateGoal);
    };