import Webpage from "../models/webpageModel.js";

export const getAllWebpage = async (req, res) => {
    try {
        const webpages = await Webpage.find({});
        if (webpages.length == 0) {
            return res.send({status: false, message: "No records exist" })
        } else {
            return res.send({status: true, webpages})
        }
    } catch (error) {
        console.log("Error: ", error)    
    }
}

export const createWebpage = async (req, res) => {
    const webpage = req.body;
    console.log(webpage);
    if (!webpage.title || !webpage.content) {
        return res.send({status: false, message: "Form field is required"});
    } 
    try {
        const ok = await Webpage.create(webpage);
        if (ok) {
            return res.send({status: true, message: "Webpage has been created"})
        } else {
            return res.send({status: true, message: "Data isn't insert"})
        }
    } catch (error) {
        console.log(`Error: \n ${error}`)
    }
}

export const deleteWebpage = async (req, res) => {
    const {id} = req.params;
    try {
        const webpage = await Webpage.findByIdAndDelete({_id: id});
        if (!webpage) {
            return res.send({status: false, message: "Webpage not found or maybe deleted"})
        }
        if (webpage) {
            return res.send({status: true, message: "Webpage has been deleted"})
        } else {
            return res.send({status: true, message: "Failed to delete webpage"})
        }
    } catch (error) {
        console.log(`Error: \n ${error}`)
    }
}

export const detailWebpage = async (req, res) => {
    const id = req.params.id;
    const webpage = await Webpage.findById({_id : id});
    
    if (!webpage) {
        return res.send({status: false, message: "Webpage not found or maybe deleted"})
    }

    return res.send({status: true, webpage})

}

export const updateWebpage = async (req, res) => {
    const id = req.params.id;
    const webpage = req.body;
    
    try {
        const ok = await Webpage.findByIdAndUpdate({_id: id}, webpage);

        if (ok) {
            return res.send({status: true, message: "Webpage Updated"})
        } else {
            return res.send({status: false, message: "Failed to update webpage"})
        }
    } catch (error) {
        console.log(`Error: \n ${error}`)
    }
}