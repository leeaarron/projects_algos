const Goal = require('../models/goal.model');

const healthcheck = (req, res) => {
    res.json({msg: "everything is set up"});
};

const addNewGoal = (req, res) => {
    const {body} = req; // destructuring request - pull body off request // request.body - express - object of key: value pairs of what data was sent from the client
    console.log(body);
    Goal.create(body)
        .then((newGoalDoc) => {
            res.json({newGoalDoc});
        })
        .catch((err) => {
            res.status(400).json({err});
        }); //use for every error block inside of a controller
};


const getAllGoals = (req, res) => {
    Goal.find()
    .then((allGoals) => res.json(allGoals))
    .catch((err) => {
        res.status(400).json({err});
    });
};

const getGoalById = (req, res) => {
    const {params} = req; //destructuring req.params
    console.log(params);
    Goal.findOne({ _id: params.id })
        .then((queriedGoal) => {
            res.json(queriedGoal);
        })
        .catch((err) => {
            res.status(400).json({err});
        });
};

const deleteGoal = (req, res) => {
    Goal.deleteOne({_id: req.params.id})
        .then(result => {
            res.json({result});
        })
        .catch((err) => {
            res.status(400).json({err});
        });
};

const updateGoal = (req, res) => {
    const {body, params} = req;
    Goal.findOneAndUpdate({_id: params.id}, body, {
        new: true,
        runValidators: true,
    }) //first arg is query doc, then it's the information thats going to update (body), new is saying you want the new updated doc, run validators when updating
        .then((updatedGoal) => {
            res.json({updatedGoal});
        })
        .catch((err) => {
            res.status(400).json({err});
        });
};



module.exports = {
    healthcheck,
    addNewGoal,
    getAllGoals,
    getGoalById,
    deleteGoal,
    updateGoal,
};