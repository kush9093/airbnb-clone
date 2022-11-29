import mongoose from "mongoose";


export interface pwd {
    password: string;
    showPassword?: boolean;
}


export interface State extends pwd {
    firstname: string;
    lastname: string;
    birthday: Date | null;
    marketing: boolean|Date|null; // 마케팅수신동의날짜
}

export interface AccountData extends State {
    email: string;
    state: Date | null;
    provider:string;
}

export interface ReservationData {
    orderId?:string;
    hostId?:mongoose.Types.ObjectId
    guestId?:string;
    checkIn?:string;
    checkOut?:string;
    numberOfGuests?:number;
    payd?:string
}