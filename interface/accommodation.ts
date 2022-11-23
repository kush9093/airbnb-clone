import mongoose from "mongoose";

export interface accomodationtype {
    _id?:mongoose.Types.ObjectId;
    address? : {
        RoadName:String;
        RoadNumber:String;
        cities:String;
        country:String;
        district:String;
        lat:String;
        lng:String;
    };
    floor?:{
        bathroom:Number;
        bed:Number;
        guest:Number;
    }
    group?:String;
    photos?:String[];
    price?:Number;
    publish?:Boolean;
    receipt?:Date;
    space?:String;
    targetUser?:String;
    title?:String;
    type?:String;

}