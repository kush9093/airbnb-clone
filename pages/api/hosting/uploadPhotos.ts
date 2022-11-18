import formidable from "formidable";
import { NextApiRequest, NextApiResponse, NextConfig } from "next";


export const config:NextConfig = {
    api:{
        bodyParser:false,
    },
}



export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse
){
    console.log("====uploadPhtos ====");
    console.log("req.body",req.body)
    const form = formidable({multiples:true});
    form.parse(req,(err,fields,files)=>{
        if(err){
           return console.log("!!!! ERROR !!!",err)
        }
        console.log(fields);
        console.log(files);
    })
    return res.status(200).json({})
}