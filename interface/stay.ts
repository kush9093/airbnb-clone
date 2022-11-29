import mongoose from "mongoose"

export interface staytype {
    productId?: string
    numberOfAdults?: number,
    numberOfChildren?: number,
    numberOfInfants?: number,
    checkin?: Date,
    checkout?: Date,
    guestCurrency?: string,
    isWorkTrip?: boolean,
    numberOfGuests?: number,
    numberOfPets?: number,
    code?: string
}