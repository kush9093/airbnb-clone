import { ReservationData } from "../interface"

export async function creatersv(obj : ReservationData){
    let endpoint =  `${process.env.NEXT_PUBLIC_SERVER_IP}/api/reservation/addreservation`
    const response = await fetch(endpoint,{
        method: "POST",
        body: JSON.stringify({...obj}),
        headers:{
            "Content-type":"application/json"
        },
    })
    const data = await response.json()
    return data
}

export async function findrsv(obj : ReservationData){
    let endpoint =  `${process.env.NEXT_PUBLIC_SERVER_IP}/api/reservation/findreservation`
    const response = await fetch(endpoint,{
        method: "POST",
        body: JSON.stringify({...obj}),
        headers:{
            "Content-type":"application/json"
        },
    })
    const data = await response.json()
    return data
}