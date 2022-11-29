import mongoose from "mongoose";

export interface accomodationtype {
    _id?: mongoose.Types.ObjectId;
    address?: {
        RoadName: string;
        RoadNumber: string;
        cities: string;
        country: string;
        district: string;
        lat: string;
        lng: string;
    };
    floor?: {
        bathroom: number;
        bed: number;
        guest: number;
    }
    group?: string;
    photos?: string[];
    price?: number;
    publish?: boolean;
    receipt?: Date;
    space?: string;
    targetUser?: string;
    title?: string;
    type?: string;
    check?: {
        checkIn: string,
        checkOut: string,
    }[]

}