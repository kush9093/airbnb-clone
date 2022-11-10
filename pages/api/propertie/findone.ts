import { NextApiHandler } from "next";
import Propertie from "../../../lib/models/propertie";

export const handler: NextApiHandler = async (req, res) => {
    const { method } = req;
    if (method === "GET") {
        const data = await Propertie.findOne({group:req.query.group});
        if (data) {
            return res.json({ result: true, data})
        } else {
            return res.json({ result: false })
        }

    }
}

export default handler;