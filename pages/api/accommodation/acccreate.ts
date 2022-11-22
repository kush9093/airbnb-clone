import { NextApiHandler } from "next";
import accommodation from "../../../lib/models/accommodation";
import dbConnect from "../../../lib/dbConnect"

export const handler: NextApiHandler = async (req, res) => {
    const { method,body } = req;
    await dbConnect();
    if (method === "POST") {
        const data = await accommodation.create({targetUser:body.targetUser,group:body.group})
            if (data) {
            return res.json({ result: true, data})
        } else {
            return res.json({ result: false })
        }

    }
}

export default handler;