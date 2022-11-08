import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import SignupFrom from "../../components/ui/signup-from";
import Signupindex from "../../components/ui/signupindex";

export default function AuthError() {
    // 사용자가 플랫폼로그인시 

    const router = useRouter();
    const {error} = router.query;

    if(error === "Duplicated"){
        return <h2>이미 사용중인 이메일입니다.</h2>;
    }
    if(error === "NotEnough"){
    //    console.log(router.query.email)
    return 
    }
}

AuthError.isInLayout = true;


export const getServerSideProps : GetServerSideProps = async(props) => {

    return {props:{
        error:props.query.error??"default",
    }}
}