const Notes = require("../models/notes")

const addnewnote = async (req, res) => {
    try {
        const newnote = await new Notes({
            id: req.body.id,
            userid: req.body.userid,
            title: req.body.title,
            content: req.body.content
        });
        await newnote.save();
        res.status(200).json({
            status: true,
            data: newnote

        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            message: err.message,
            status: false,
        })
    }
}
const deltenote = async (req, res) => {
    try {
        await Notes.deleteOne({ id: req.body.id });
        res.status(200).json({
            status: true,
            message: "Note Delete"

        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            message: err.message,
            status: false,
        })
    }
}
const fetchnotes = async (req, res) => {
    try {
        const notes = await Notes.find();
        res.status(200).json({
            status: true,
            data: notes

        })

    } catch (err) {
        console.log(err)
        res.status(400).json({
            message: err.message,
            status: false,
        })
    }
}

const updatenotes = async (req, res) => {
    try {
        const note = await Notes.updateOne({ id: req.body.id }, req.body);
        res.status(200).json({
            status: true,
            data: note

        })

    } catch (err) {
        console.log(err)
        res.status(400).json({
            message: err.message,
            status: false,
        })
    }
}

module.exports = { addnewnote, deltenote, fetchnotes, updatenotes };