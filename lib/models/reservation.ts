import mongoose from "mongoose";
import { AccountData, ReservationData } from "../../interface";


const ReservationSchema = new mongoose.Schema<ReservationData>({
    orderId:String,
})

export default (mongoose.models.Reservation as mongoose.Model<ReservationData>) || mongoose.model<ReservationData>("Reservation",ReservationSchema);