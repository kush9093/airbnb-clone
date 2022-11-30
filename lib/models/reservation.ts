import mongoose from "mongoose";
import { AccountData, ReservationData } from "../../interface";


export const ReservationSchema = new mongoose.Schema<ReservationData>({
    orderId:String,
    hostId:mongoose.Types.ObjectId,
    guestId:String,
    checkIn:String,
    checkOut:String,
    numberOfGuests:Number,
    payd:String,
})

ReservationSchema.virtual("hostdata",{
    ref:"Accommodation",
    localField:"hostId",
    foreignField:"_id",
    justOne:true
})


export default (mongoose.models.Reservation as mongoose.Model<ReservationData>) || mongoose.model<ReservationData>("Reservation",ReservationSchema);