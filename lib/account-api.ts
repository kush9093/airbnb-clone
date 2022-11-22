import { AccountData } from "../interface";



export async function signupAPI(account:AccountData){
    let endpoint = `${process.env.NEXT_PUBLIC_SERVER_IP}/api/account/signup`
    console.log(account);
    const response = await fetch(endpoint,{
        method: "POST",
        body: JSON.stringify({...account}),
        headers:{
            "Content-type":"application/json"
        },
    })
    const data = await response.json()
    return data
}

export async function chdEmailAPI(email:string){
    let endpoint = `${process.env.NEXT_PUBLIC_SERVER_IP}/api/account/signin?email=${email}`
    const response = await fetch(endpoint,{
        method: "GET",
    })
    const data = await response.json()
    return data
}

export async function chdpassAPI(email:string,password:string){
    let endpoint = `${process.env.NEXT_PUBLIC_SERVER_IP}/api/account/signin`
    const response = await fetch(endpoint,{
        method: "POST",
        body:JSON.stringify({email,password}),
        headers:{
            "Content-type":"application/json"
        }
    })
    const data = await response.json()
    return data
}

export async function delaccAPI(email:string){
    let endpoint = `${process.env.NEXT_PUBLIC_SERVER_IP}/api/account/delete`
    const response = await fetch(endpoint,{
        method:"POST",
        body:JSON.stringify({email}),
        headers:{
            "Content-type":"application/json"
        }
    })
    const data = await response.json();
    return data;
}
