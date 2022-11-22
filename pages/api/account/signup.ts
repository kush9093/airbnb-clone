import { NextApiHandler } from "next";
import { AccountData } from "../../../interface";
import Account from "../../../lib/models/account";
import bcrypt from "bcryptjs"
import dbConnect from "../../../lib/dbConnect"

type result = { result: boolean, data?: any }

export const handler: NextApiHandler<result> = async (req, res) => {
    const { method } = req;
    await dbConnect();
    if(method === "GET"){
    const {email} = req.query;
    const data = await Account.findOne({email});
    if(data){
        return res.json({result:true,data})
    } else {
        return res.json({result:false})
    }
    
    } else if (method === "POST") {
        try {
            const document = req.body as AccountData;
            const newpass = await bcrypt.hash(document.password,10);
            const data = await Account.create({...document,password:newpass});

            return res.status(201).json({ result: true, data: data })
        }catch(e){
            console.log(e);
            return res.status(500).json({result:false,data:e})
        }
    } else {
        return res.status(500).json({result:false})
    }

}

export default handler;