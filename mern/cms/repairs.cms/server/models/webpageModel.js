import mongoose from "mongoose";

const webpageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Webpage = mongoose.model('Webpage', webpageSchema);
export default Webpage;