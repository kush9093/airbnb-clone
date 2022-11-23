


export async function acccreate(targetUser:string,group:string){
    let endpoint = `${process.env.NEXT_PUBLIC_SERVER_IP}/api/accommodation/acccreate`
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
    let endpoint = `${process.env.NEXT_PUBLIC_SERVER_IP}/api/accommodation/findacc`
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

export async function findAllAcc(){
    let endpoint = `${process.env.NEXT_PUBLIC_SERVER_IP}/api/accommodation/findacc`
    const response = await fetch(endpoint,{
        method: "GET"
    })
    const data = await response.json()
    return data
}

export async function finduser(targetUser:string){
    let endpoint = `${process.env.NEXT_PUBLIC_SERVER_IP}/api/accommodation/finduser`
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


export async function updatekind(_id:string,kind:string,type?:any){
    let endpoint =  `${process.env.NEXT_PUBLIC_SERVER_IP}/api/accommodation/updatekind`
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



