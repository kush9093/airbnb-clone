import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import ImagePreview from "./ImagePreview";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export default function ImageUploadBox({ImageHandle}:{ImageHandle:any}) {
    const [uploadedImages, setUploadedImages] = useState<any[]>([]);
    const [previewImages, setPreviewImages] = useState([]);
    const [max, setMax] = useState(10);
    const uploadBoxRef = useRef<HTMLLabelElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const uploadBox = uploadBoxRef.current!;
        const input = inputRef.current!;

        const handleFiles = (files:any) => {
            for (const file of files) {
                if (!file.type.startsWith("image/")) continue;
                const reader = new FileReader();
                reader.onloadend = (e) => {
                    const result = e.target!.result;
                    if (result) {
                        setUploadedImages((state) => [...state, result].slice(0, max));
                    }
                };
                reader.readAsDataURL(file);
            }
        };

        const changeHandler = (event:any) => {
            const files = event.target.files;
            handleFiles(files);
        };

        const dropHandler = (event:any) => {
            event.preventDefault();
            event.stopPropagation();
            const files = event.dataTransfer.files;
            handleFiles(files);
        };

        const dragOverHandler = (event:any) => {
            event.preventDefault();
            event.stopPropagation();
        };

        uploadBox.addEventListener("drop", dropHandler);
        uploadBox.addEventListener("dragover", dragOverHandler);
        input.addEventListener("change", changeHandler);

        return () => {
            uploadBox.removeEventListener("drop", dropHandler);
            uploadBox.removeEventListener("dragover", dragOverHandler);
            input.removeEventListener("change", changeHandler);
        };
    }, [max]);

    useEffect(() => {
        const imageJSXs:any = uploadedImages.map((image, index) => {
            const isDeleteImage = (element:any) => {
                return element === image;
            };
            const deleteFunc = () => {
                uploadedImages.splice(uploadedImages.findIndex(isDeleteImage), 1);
                setUploadedImages([...uploadedImages]);
            };
            return <ImagePreview image={image} idx={index} deleteFunc={deleteFunc} key={index} />;
        });
        setPreviewImages(imageJSXs);
        ImageHandle(uploadedImages);
    }, [uploadedImages]);



    return (
        <Box className="ImageUploadBox" sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            {
                uploadedImages.length > 0 &&
                <Typography variant="h6" gutterBottom><b>5??? ????????? ????????? ???????????????.</b></Typography>
            }
            {uploadedImages.length === 0 &&
                <label className="drag_or_click" htmlFor={"111"} ref={uploadBoxRef}>
                    <Box className="text_box" sx={{ border: "1px dotted black", p: 3, width: "25vw", height: "50vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <AddPhotoAlternateIcon fontSize="large" />
                        <Typography variant="h6" gutterBottom><b>????????? ????????? ????????? ????????????.</b></Typography>
                        <Typography>5??? ????????? ????????? ???????????????.</Typography>
                    </Box>
                </label>
            }
            <input type="file" multiple accept="image/*" id={"111"} ref={inputRef} style={{ display: "none" }} />
            <Box className="preview_wrapper" sx={{ width: "100%" }}>
                <Box className="preview_container" sx={{ display: "flex", flexDirection: "row",flexWrap:"wrap",justifyContent:"center",alignItems:"flex-start" }}>{previewImages}
                <Box>
                    {uploadedImages.length > 0 &&
                        <label className="drag_or_click" htmlFor={"111"} ref={uploadBoxRef}>
                            <Box className="text_box" sx={{ border: "1px dotted black", p: 3, width: "20vw", height: "20vh",m:1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <AddPhotoAlternateIcon fontSize="large" />
                            </Box>
                        </label>
                    }
                </Box>
                </Box>
               
            </Box>
        </Box>
    );
}