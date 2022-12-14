import { NextApiHandler } from "next";
import { ReservationData } from "../../../interface";
import dbConnect from "../../../lib/dbConnect"
import Reservation from "../../../lib/models/reservation";

type result = { result: boolean, data?: any }

export const handler: NextApiHandler<result> = async (req, res) => {
    const { method } = req;
    await dbConnect();
  if (method === "POST") {
        try {
            const document = req.body as ReservationData;
            const arr = await Reservation.find({hostId:document.hostId,checkOut:{$gt:document.checkIn},checkIn:{$lt:document.checkOut}})
            if(arr.length>0){
                return res.status(422).json({result:false});
            } else {
                const data = await Reservation.create({...document});
                return res.status(200).json({result:true})
            }
            
        }catch(e){
            console.log(e);
            return res.status(500).json({result:false,data:e})
        }
    } else {
        return res.status(500).json({result:false})
    }

}

export default handler;