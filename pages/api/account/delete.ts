import { NextApiHandler } from "next";
import Account from "../../../lib/models/account";
import dbConnect from "../../../lib/dbConnect"
type result = { result: boolean, data?: any }

export const handler: NextApiHandler<result> = async (req, res) => {
    const { method } = req;
    await dbConnect();
    if (method === "POST") {
        const { email } = req.body;
        const data = await Account.deleteOne({ email });
        return res.json({result:true})
    }

}

export default handler;