import { NextApiHandler } from "next";
import { AccountData } from "../../../interface";
import Account from "../../../lib/models/account";
import bcrypt from "bcryptjs"
import dbConnect from "../../../lib/dbConnect"

type result = { result: boolean, data?: any }

export const handler: NextApiHandler<result> = async (req, res) => {
    const { method } = req;
    await dbConnect();
    if (method === "GET") {
        const { email } = req.query;
        const data = await Account.findOne({ email });
        if (data) {
            return res.json({ result: true, data: email })
        } else {
            return res.json({ result: false })
        }

    } else if (method === "POST") {
        const { email, password } = req.body;
        const data = await Account.findOne({ email });
        let matchpass = await bcrypt.compare(password, data!.password);
        if (matchpass) {
            return res.json({ result: true, data });
        } else {
            return res.json({ result: false });
        }
    }

}

export default handler;