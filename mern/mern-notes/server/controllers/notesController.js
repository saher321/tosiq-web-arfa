import Note from "../models/notesModel.js";

export const getAllNotes = async (req, res) => {
    const notes = await Note.find({});
    return res.send({status: true, notes})
}