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
            console.log("body",req.body);
            const document = req.body as ReservationData;
            const data = await Reservation.create({orderId:document.orderId});
            return res.status(200).json({result:true,data:data})
            
        }catch(e){
            console.log(e);
            return res.status(500).json({result:false,data:e})
        }
    } else {
        return res.status(500).json({result:false})
    }

}

export default handler;