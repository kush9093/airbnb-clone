import { NextApiHandler } from "next";
import accommodation from "../../../lib/models/accommodation";
import dbConnect from "../../../lib/dbConnect"
export const handler: NextApiHandler = async (req, res) => {
    const { method,body } = req;
    console.log(body);
    await dbConnect();
    let data;
    if (method === "POST") {
        if(body.kind === "type"){
            data = await accommodation.updateOne({_id:body._id},{$set:{type:body.type}})
        } else if(body.kind === "space"){
            data = await accommodation.updateOne({_id:body._id},{$set:{space:body.type}})
        } else if(body.kind === "address"){
            data = await accommodation.updateOne({_id:body._id},{$set:{address:body.type}})
        } else if(body.kind === "floor"){
            data = await accommodation.updateOne({_id:body._id},{$set:{floor:body.type}})
        } else if(body.kind === "photos"){
            data = await accommodation.updateOne({_id:body._id},{$push:{photos:body.type}})
        } else if (body.kind === "title"){
            data = await accommodation.updateOne({_id:body._id},{$set:{title:body.type}})
        } else if (body.kind === "price"){
            data = await accommodation.updateOne({_id:body._id},{$set:{price:body.type}})
        } else if (body.kind === "publish"){
            data = await accommodation.updateOne({_id:body._id},{$set:{publish:true,receipt:Date.now()}})
        }
        console.log("data",data);
            if (data) {
            return res.json({ result: true, data})
        } else {
            return res.json({ result: false })
        }

    }
}

export default handler;