import { NextApiHandler } from "next";
import { ReservationData } from "../../../interface";
import { accomodationtype } from "../../../interface/accommodation";
import dbConnect from "../../../lib/dbConnect"
import accommodation from "../../../lib/models/accommodation";
import Reservation from "../../../lib/models/reservation";

type result = { result: boolean, order?:ReservationData,room?:accomodationtype,data?:any }

export const handler: NextApiHandler<result> = async (req, res) => {
    const { method } = req;
    await dbConnect();
  if (method === "POST") {
        try {
            const order = await Reservation.findOne({orderId:req.body.orderId});
            const room = await accommodation.findOne({_id:order?.hostId})
            return res.status(200).json({result:true,order:order!,room:room!});
            
        }catch(e){
            console.log(e);
            return res.status(500).json({result:false,data:e})
        }
    } else {
        return res.status(500).json({result:false})
    }

}

export default handler;