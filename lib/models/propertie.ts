import mongoose from "mongoose";


const PropertieSchema = new mongoose.Schema({
    group: String,
    image: String,
    types: [
        {
            property: String,
            description: String
        }
    ]

})

export default (mongoose.models.Propertie) || mongoose.model("Propertie", PropertieSchema);