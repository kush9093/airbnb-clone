import { NextApiHandler } from "next";
import accommodation from "../../../lib/models/accommodation";
import dbConnect from "../../../lib/dbConnect"

export const handler: NextApiHandler = async (req, res) => {
    const { method,body } = req;
    await dbConnect();
    if (method === "POST") {
        const data = await accommodation.findOne({_id:body._id}).populate("check").lean()
            if (data) {
            return res.json({ result: true, data})
        } else {
            return res.json({ result: false })
        }
    } else if(method === "GET"){
        const data = await accommodation.find({publish:true})
        return res.json({data});
    } else {
        return res.json({})
    }
}

export default handler;