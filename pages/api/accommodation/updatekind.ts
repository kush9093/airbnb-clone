import { NextApiHandler } from "next";
import accommodation from "../../../lib/models/accommodation";

export const handler: NextApiHandler = async (req, res) => {
    const { method,body } = req;
    console.log(body);
    let data;
    if (method === "POST") {
        if(body.kind === "type"){
            data = await accommodation.updateOne({_id:body._id},{$set:{type:body.type}})
        } else if(body.kind === "space"){
            data = await accommodation.updateOne({_id:body._id},{$set:{space:body.type}})
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