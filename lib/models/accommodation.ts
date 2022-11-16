import mongoose from "mongoose";


const AccommodationSchema = new mongoose.Schema({
    targetUser: String,
    group:String,
    type:String,
    space:String,
    address:{
        country:String,
        cities:String,
        district:String,
        RoadName:String,
        RoadNumber:String,
        postal:String,
        lat:String,
        lng:String
    },
    floor:{
        guest:Number,
        bed:Number,
        bathroom:Number,
    }
})

export default (mongoose.models.Accommodation) || mongoose.model("Accommodation", AccommodationSchema);