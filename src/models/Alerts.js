
const mongoose = require('mongoose');
//Schema 
const AlertDataSchema = new mongoose.Schema({
    confidence: {
        type: Number,
        required: true,
        default: 0.5,     
      },      
      action_Id: {
        type: Number,
        required: true,      
      },
      camera_Id: {
        type: Number,
        required: true,       
      },

},{ timestamps: true }); //for date
//modal
module.exports = mongoose.model('Alert', AlertDataSchema);




//api/alerts/statics/minConfidence:""&maxConfidence:"", startDate:"all" & endDate:" "&cameraID:[1,2,3]&actionID:[1,2,3]
