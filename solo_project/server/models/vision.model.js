const mongoose = require("mongoose");

const VisionSchema = new mongoose.Schema({
    visionImgUrl: {
        type: String,
        // required: [true, "Goal title is required"],
        // minlength: [5, "Goal title must be at least 5 characters"],
    },
    
});

const Vision = mongoose.model('Vision', VisionSchema);

module.exports = Vision;