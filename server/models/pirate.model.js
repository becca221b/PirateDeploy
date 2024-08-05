const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema({
    name: { type: String,
        required: [true, "name is required"],
        minlength: [3, "name must be at least 5 characters"] },
    imageUrl: { type: String,
        required: [true, "url is required"],
        minlength: [3, "type must be at least 3 characters"]},
    numOfTreasures:{
        type: Number,
        required: [true, "Number of treasures is required"],
        minlength: [3, "description must be at least 5 characters"]
    },
    catchPhrase:{
        type: String,
        required: [true,"Pirate Catch Phrases is required"]
    },
    crewPosition: {
        type: String,
        required: [true, "Select any crew position"]
    },
    
    pegLeg:{
        type: Boolean,
        default: true
    },
    eyePatch:{
        type: Boolean,
        default: true
    },
    hookHand:{
        type: Boolean,
        default: true   
    }
        
        
    
    
}, { timestamps: true });

const Pet = mongoose.model("Pirate", PirateSchema);

module.exports = Pet;

