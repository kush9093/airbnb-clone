import mongoose from "mongoose";


const AccommodationSchema = new mongoose.Schema({
    targetUser: String,
    group:String,
    type:String,
    space:String,
})

export default (mongoose.models.Accommodation) || mongoose.model("Accommodation", AccommodationSchema);