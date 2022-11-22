
import { Box, Button, Divider, Chip, Avatar, Paper, ImageList } from "@mui/material";
import Link from "next/link";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import ImageUploadBox from "../../../components/photo/ImageUploadBox";



export default function PhotosPage(prop: any) {
    const { itemId } = prop;
    const [btn, setBtn] = React.useState(false);
    const router = useRouter();
    const [ImageList, setImageList] = React.useState([]);
    const nextStepHandle = async () => {
        //업데이트 부분
        const formData = new FormData();

        formData.append("itemId", itemId as string);


        function dataURLtoFile(dataurl, filename) {
            var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, { type: mime });
        }

        ImageList.forEach((one) => {
            const file = dataURLtoFile(one, Date.now()+Math.floor(Math.random()*100));
            console.log(file);
            formData.append("photos", file);
        })


        const response = fetch("/api/hosting/uploadPhotos", {
            method: "POST",
            body: formData,
        })


        router.push("/become-a-host/" + itemId + "/title");
    };

    const ImageHandle = (arr) => {
        setImageList(arr);
    }

    const previousHandle = () => {
        router.push({
            pathname: '/become-a-host/[itemId]/photos',
            query: { itemId },
        })
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={16}>
                    <Grid sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(to top, #3B07BB, 50%, #E61E4D)" }} item xs={8}>
                        <Box>
                            <Typography sx={{ color: "white", width: "100%", textAlign: "center" }} variant="h3" gutterBottom>
                                <b>게스트가 머무르게 될 숙소의 종류가 무엇인가요?</b>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={8} sx={{ backgroundColor: "white", height: "100vh" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", height: "100vh" }}>
                            <Box sx={{ mt: 3, mx: 4, display: "flex", justifyContent: "flex-end" }}>
                                <Box sx={{ display: "flex", gap: 1 }}>
                                    <Link href="/become-a-host/property-type-group">
                                        <Chip variant="outlined" avatar={<Avatar>M</Avatar>} label="슈퍼호스트에게 물어보기" />
                                    </Link>
                                    <Chip label="도움말" />
                                    <Chip label="저장 및 나가기" />
                                </Box>
                            </Box>
                            <Box>
                                <ImageUploadBox ImageHandle={ImageHandle} />

                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Button onClick={previousHandle} sx={{ mr: 5, mb: 2, px: 3.5, py: 1, backgroundColor: "#E61E4D" }} variant="contained" color="error">
                                    <b>뒤로</b>
                                </Button>
                                <Button onClick={nextStepHandle} disabled={btn} sx={{ mr: 5, mb: 2, px: 3.5, py: 1, backgroundColor: "#E61E4D" }} variant="contained" color="error">
                                    <b>다음</b>
                                </Button>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {

    return {
        props: { itemId: context.params?.itemId! },
    };


};


PhotosPage.isInLayout = true;