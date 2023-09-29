const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    userid: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    dateAdded: {
        type: Date,
        default: Date.now()
    },
    active: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model("Note", notesSchema);