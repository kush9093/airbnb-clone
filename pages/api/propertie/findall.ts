import { NextApiHandler } from "next";
import Propertie from "../../../lib/models/propertie";
import dbConnect from "../../../lib/dbConnect"

export const handler: NextApiHandler = async (req, res) => {
    const { method } = req;
    await dbConnect();
    if (method === "GET") {
        const data = await Propertie.find({});
        if (data) {
            return res.json({ result: true, data})
        } else {
            return res.json({ result: false })
        }

    }
}

export default handler;