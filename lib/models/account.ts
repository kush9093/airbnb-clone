import mongoose from "mongoose";
import { AccountData } from "../../interface";


const AccountSchema = new mongoose.Schema<AccountData>({
    email: String,
    firstname : String,
    lastname : String,
    password : String,
    birthday : Date,
    marketing : Date,
    state : Date,
})

export default (mongoose.models.Account as mongoose.Model<AccountData>) || mongoose.model<AccountData>("Account",AccountSchema);