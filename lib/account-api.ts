import { AccountData } from "../interface";


const serverAddress = "http://127.0.0.1:3000";

export async function signupAPI(account:AccountData){
    let endpoint = serverAddress + "/api/account/signup"
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
    let endpoint = serverAddress + `/api/account/signin?email=${email}`
    const response = await fetch(endpoint,{
        method: "GET",
    })
    const data = await response.json()
    return data
}

export async function chdpassAPI(email:string,password:string){
    let endpoint = serverAddress + `/api/account/signin`
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