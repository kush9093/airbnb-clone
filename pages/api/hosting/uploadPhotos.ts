import formidable from "formidable";
import { NextApiRequest, NextApiResponse, NextConfig } from "next";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import fs from "fs"
import { updatekind } from "../../../lib/accommodation-api";
import dbConnect from "../../../lib/dbConnect"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC17qxGa463wVKthjp2iEKKMm8Gh1llXLI",
    authDomain: "clone-project-a674d.firebaseapp.com",
    projectId: "clone-project-a674d",
    storageBucket: "clone-project-a674d.appspot.com",
    messagingSenderId: "1085707833456",
    appId: "1:1085707833456:web:3d415e2ecd73b6601064b5"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const config: NextConfig = {
    api: {
        bodyParser: false,
    },
}



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await dbConnect();
    const form = formidable({ multiples: true });


    // 밑에꺼 완성해야됨
    const result = await new Promise((resolve, reject) => {
        form.parse(req, async (err, fields, files) => {
            resolve({
                itemId: fields.itemId as string,
                photos: files.photos as formidable.File[],
            });

            const storage = getStorage(firebaseApp);
            const dirRef = ref(storage, "hosting/"+fields.itemId)
            for (let one of files.photos as formidable.File[]) {
                const fileRef = ref(dirRef, one.newFilename);
                const file = fs.readFileSync(one.filepath);
                // console.log(file);
                const result = await uploadBytes(fileRef, file, { contentType: one.mimetype! });
                // console.log(result);
                const url = await getDownloadURL(fileRef);
                // console.log(url);
                await updatekind(fields.itemId as string,"photos",url);
            }

        });
    });
    // console.log(result);


    // form.parse(req,async (err,fields,files)=>{
    //     if(err){
    //        return console.log("!!!! ERROR !!!",err)
    //     }
    //     console.log("fields",fields);
    //     // console.log(files);

    //     const storage = getStorage(firebaseApp);

    //     const dirRef = ref(storage,"hosting/",fields.itemId)
    //     for(let one of files.photos as formidable.File[]){
    //         const fileRef = ref(dirRef, one.newFilename);
    //         const file = fs.readFileSync(one.filepath);
    //         console.log(file);
    //         const result = await uploadBytes(fileRef,file,{contentType:one.mimetype!});
    //         console.log(result);
    //         const url = await getDownloadURL(fileRef);
    //         console.log(url);
    //     }
    // })
    return res.status(200).json({})
}