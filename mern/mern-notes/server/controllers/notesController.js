import Note from "../models/notesModel.js";

export const getAllNotes = async (req, res) => {
    const notes = await Note.find({});
    return res.send({status: true, notes})
}

export const createNotes = async (req, res) => {
    const notes = req.body;
    if (!notes.title || !notes.description) {
        return res.send({status: false, message: "Form field is required"});
    } 
    try {
        const ok = await Note.create(notes);
        if (ok) {
            return res.send({status: true, message: "Data inserted"})
        } else {
            return res.send({status: true, message: "Data isn't insert"})
        }
    } catch (error) {
        console.log(`Error: \n ${error}`)
    }
}