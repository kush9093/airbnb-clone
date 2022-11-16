
import { Box, Button } from "@mui/material";
import Link from "next/link";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { updatekind } from "../../../lib/accommodation-api";
import Googledetail from "../../../components/ui/googledetail";
import Googlemodal from "../../../components/ui/googlemodal";
import Googlemaps from "../../../components/ui/googlemaps";


export default function PropertyTypePage(prop: any) {
    const { itemId } = prop;
    const [btn, setBtn] = React.useState<boolean>(true);
    const [inputValue, setInputValue] = React.useState<string>('');
    const [predictions, setPredictions] = React.useState<any[] | null>(null);
    const [selelm, setSelelm] = React.useState<object | null>(null);
    const [latlng,setLatlng] = React.useState<string>("37.5666805,126.9784147")
    const [compo,setCompo] = React.useState<string>("detail")
    const [combox,setCombox] = React.useState<string>("default")
    let val1;
    let val2;
    const textelm = (dval1:string,dval2:string) => {
        val1 = dval1;
        val2 = dval2;
    }

    if(selelm){
        console.log("selelm",selelm.address_components[4].long_name);
    }
    React.useEffect(() => {
        const timerId = setTimeout(async () => {
            // 
            if (inputValue.trim().length === 0) {
                setPredictions(null);
                return;
            }
            const endPoint =
                `/google/autocomplete?input=${inputValue}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&language=ko&components=country:kr&types=address`
            const response = await fetch(endPoint);
            const json = await response.json();
            setPredictions(json.predictions)
        }, 500)
        return () => {
            console.log(timerId + ".. cancled")
            clearTimeout(timerId);
        }
    }, [inputValue])

    const router = useRouter();
    const nextStepHandle = async () => {
        //업데이트 부분
        if(selelm){
            const data = await updatekind(itemId,"address",{
                country:selelm.address_components[4]!.long_name,
                cities:selelm.address_components[3]!.long_name,
                district:selelm.address_components[2]!.long_name,
                RoadName:selelm.address_components[1]!.long_name,
                RoadNumber:selelm.address_components[0]!.long_name.trim() ,
                lat:val1,
                lng:val2,
            })
            console.log(data);
            router.push("/become-a-host/" + itemId + "/floor-plan");
        }
       
    };
    const previousHandle = () => {
        if(combox === "next"){
            setCombox("default")
        } else if(compo === "modal"){
            setCompo("detail");
        } else {
            router.push({
                pathname: '/become-a-host/[itemId]/privacy-type',
                query: { itemId },
              })
        }
    }

    const onInputValue = (val:string) => {
        setInputValue(val)
    }
    const onChangeCom = (val:string) => {
        setCompo(val);
    }
    const changeElm = (val:object) => {
        setSelelm(val);
    }

    const onChangebox = (val:string) =>{
        if(val === "next"){
            setBtn(false);
            setCombox(val)
        } else {
            setBtn(true);
            setCombox(val)
        }
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container columns={16}>
                    <Grid sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(to top, #3B07BB, 50%, #E61E4D)" }} item xs={8}>
                        <Box>
                            <Typography sx={{ color: "white", width: "100%", textAlign: "center" }} variant="h3" gutterBottom>
                                <b>숙소 위치는 어디인가요?</b>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={8} sx={{ backgroundColor: "white", height: "100vh" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", height: "100vh", }}>
                        { combox ==="default" &&
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, height: "90vh", alignItems: "center", backgroundSize: "cover", backgroundImage: `url(https://maps.googleapis.com/maps/api/staticmap?center=${latlng}&zoom=12&size=1200x1200&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY})` }}>
                            {
                              compo === "detail" && <Googledetail changeElm={changeElm}  onChangeCom={onChangeCom} inputValue={inputValue} onInputValue={onInputValue} predictions={predictions} setPredictions={setPredictions} setLatlng={setLatlng}    />
                            }
                            {
                                compo === "modal" && <Googlemodal onChangebox={onChangebox} selelm={selelm} onChangeCom={onChangeCom}  />
                            }
                            </Box>
                        }
                        {
                            combox === "next" && <Googlemaps selelm={selelm} textelm={textelm} />
                        }
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Button onClick={previousHandle} sx={{ mr: 5, mb: 2, px: 3.5, py: 1, color: "black", textDecorationLine: "underline" }} variant="text" color="error">
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


PropertyTypePage.isInLayout = true;