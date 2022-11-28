import { ReservationData } from "../interface"

export async function creatersv(obj : ReservationData){
    console.log("orderId",obj)
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
