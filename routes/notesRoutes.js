const express = require('express');
const { addnewnote, deltenote, fetchnotes, updatenotes } = require('../controllers/notesController');
const router = express.Router();
router.put("/notes", addnewnote)
router.delete("/notes", deltenote)
router.post("/notes", fetchnotes)
router.patch("/notes", updatenotes)
module.exports = router;