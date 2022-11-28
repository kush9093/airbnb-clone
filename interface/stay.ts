import mongoose from "mongoose"

export interface staytype {
    productId?: String
    numberOfAdults?: Number,
    numberOfChildren?: Number,
    numberOfInfants?: Number,
    checkin?: Date,
    checkout?: Date,
    guestCurrency?: String,
    isWorkTrip?: Boolean,
    numberOfGuests?: Number,
    numberOfPets?: Number,
    code?: String
}