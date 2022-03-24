const Vision = require('../models/vision.model');

const healthcheck = (req, res) => {
    res.json({msg: "everything is set up"});
};

const addNewVision = (req, res) => {
    const {body} = req; // destructuring request - pull body off request // request.body - express - object of key: value pairs of what data was sent from the client
    console.log(body);
    Vision.create(body)
        .then((newVisionDoc) => {
            res.json({newVisionDoc});
        })
        .catch((err) => {
            res.status(400).json({err});
        }); //use for every error block inside of a controller
};


const getAllVisions = (req, res) => {
    Vision.find()
    .then((allVisions) => res.json(allVisions))
    .catch((err) => {
        res.status(400).json({err});
    });
};




module.exports = {
    healthcheck,
    addNewVision,
    getAllVisions,
};