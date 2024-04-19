const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schemaData = Schema({
    operationZone: {
        type: String,
        require: true    
    },
    typeStore: {
        type: String,
        require: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})


module.exports = schemaData;
