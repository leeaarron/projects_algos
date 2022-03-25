const mongoose = require("mongoose");

const VisionSchema = new mongoose.Schema({
    visionImgUrl: {
        type: String,
    },
    
});

const Vision = mongoose.model('Vision', VisionSchema);

module.exports = Vision;