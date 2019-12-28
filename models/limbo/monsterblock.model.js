const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const monsterBlockSchema = new Schema({
    campaignId: {type: String, required: true},
    npcId: {type: String, default: 'None'},
    name: {type: String, required: true},
    challengeRating: {type: Number, required: true},
    size: {type: String, required: true},
    type: {type: String, required: true},
    alignment: {type: String, required: true},
    hitDice: {type: String, required: true},
    proficiencies: {type: [String], required: true, default: 'None'},
    savingThrows: {type: [String], required: true, default: 'None'},
    stats: {
        strength: {type: Number, required: true},
        dexterity: {type: Number, required: true},
        constitution: {type: Number, required: true},
        wisdom: {type: Number, required: true},
        intelligence: {type: Number, required: true},
        charisma: {type: Number, required: true}
    },
    actions: {type: [Object], required: true},
    legendaryActions: {type: [Object], required: true, default: 'None'},
    environment: {type: [String], required: true, default: 'Anywhere'}
})


    