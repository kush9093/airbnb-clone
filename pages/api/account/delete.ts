import { NextApiHandler } from "next";
import Account from "../../../lib/models/account";

type result = { result: boolean, data?: any }

export const handler: NextApiHandler<result> = async (req, res) => {
    const { method } = req;
    if (method === "POST") {
        const { email } = req.body;
        const data = await Account.deleteOne({ email });
        return res.json({result:true})
    }

}

export default handler;