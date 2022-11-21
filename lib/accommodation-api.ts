const serverAddress = "http://localhost:3000";


export async function acccreate(targetUser:string,group:string){
    let endpoint = serverAddress + `/api/accommodation/acccreate`
    const response = await fetch(endpoint,{
        method: "POST",
        body:JSON.stringify({targetUser,group}),
        headers:{
            "Content-type":"application/json"
        }
    })
    const data = await response.json()
    return data
}

export async function findacc(_id:string){
    let endpoint = serverAddress + `/api/accommodation/findacc`
    const response = await fetch(endpoint,{
        method: "POST",
        body:JSON.stringify({_id}),
        headers:{
            "Content-type":"application/json"
        }
    })
    const data = await response.json()
    return data
}
export async function finduser(targetUser:string){
    let endpoint = serverAddress + `/api/accommodation/finduser`
    const response = await fetch(endpoint,{
        method: "POST",
        body:JSON.stringify({targetUser}),
        headers:{
            "Content-type":"application/json"
        }
    })
    const data = await response.json()
    return data
}


export async function updatekind(_id:string,kind:string,type?:string){
    let endpoint = serverAddress + `/api/accommodation/updatekind`
    const response = await fetch(endpoint,{
        method: "POST",
        body:JSON.stringify({_id,kind,type}),
        headers:{
            "Content-type":"application/json"
        }
    })
    const data = await response.json()
    return data
}



