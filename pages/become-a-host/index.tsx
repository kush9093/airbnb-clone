
import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import After from "../../components/becomehosthome/after";
import Begin from "../../components/becomehosthome/begin";
import { finduser } from "../../lib/accommodation-api";
export default function BecomeHostHome() {
    const [arr,setArr] = useState();
    const {data,status} = useSession();
    useEffect(()=>{
    !async function(){
        if(data?.user!){
           const response = await finduser(data?.user.email);
           setArr(response.data)
        }
    }()
    
    },[])
    console.log(arr);
    if(arr === undefined){
        return;
    } 
    return (
        <>
        {arr.length === 0 && <Begin />}
        {arr.length !== 0 && <After data={data} arr={arr} />}
        </>
    )
}



BecomeHostHome.isInLayout = true;