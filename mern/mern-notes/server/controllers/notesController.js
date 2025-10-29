import Note from "../models/notesModel.js";

export const getAllNotes = async (req, res) => {
    const authUser = req.user;
    const notes = await Note.find({});
    return res.send({status: true, user: authUser, notes})
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

export const deleteNote = async (req, res) => {
    const {id} = req.params;
    try {
        const ok = await Note.findByIdAndDelete({_id: id});
        if (ok) {
            return res.send({status: true, message: "Data deleted"})
        } else {
            return res.send({status: true, message: "Data isn't delete"})
        }
    } catch (error) {
        console.log(`Error: \n ${error}`)
    }
}

export const detailNote = async (req, res) => {
    const id = req.params.id;
    const note = await Note.findById({_id : id});
    
    if (!note) {
        return res.send({status: false, message: "Note not found or maybe deleted"})
    }

    return res.send({status: true, note})

}

export const updateNote = async (req, res) => {
    const id = req.params.id;
    const note = req.body;
    
    try {
        const ok = await Note.findByIdAndUpdate({_id: id}, note);
        if (ok) {
            return res.send({status: true, message: "Note Updated"})
        } else {
            return res.send({status: true, message: "Failed to update note"})
        }
    } catch (error) {
        console.log(`Error: \n ${error}`)
    }
}