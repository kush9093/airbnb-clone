import mongoose from "mongoose";
import { accomodationtype } from "../../interface/accommodation";
import reservation from "./reservation";

const AccommodationSchema = new mongoose.Schema({
    targetUser: String,
    group:String,
    type:String,
    space:String,
    title:String,
    price:Number,
    receipt:Date,
    publish:Boolean,
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
    },
    photos:[String],
})

AccommodationSchema.virtual("check",{
    ref:"Reservation",
    localField:"_id",
    foreignField:"hostId"
})


export default (mongoose.models.Accommodation as mongoose.Model<accomodationtype>) || mongoose.model<accomodationtype>("Accommodation",AccommodationSchema);