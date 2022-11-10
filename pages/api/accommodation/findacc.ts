import { NextApiHandler } from "next";
import accommodation from "../../../lib/models/accommodation";

export const handler: NextApiHandler = async (req, res) => {
    const { method,body } = req;
    if (method === "POST") {
        const data = await accommodation.findOne({_id:body._id})
            if (data) {
            return res.json({ result: true, data})
        } else {
            return res.json({ result: false })
        }

    }
}

export default handler;