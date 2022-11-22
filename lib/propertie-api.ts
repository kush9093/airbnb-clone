

export async function findpropertie(){
    let endpoint = `${process.env.NEXT_PUBLIC_SERVER_IP}/api/propertie/findall`
    const response = await fetch(endpoint,{
        method: "GET",
    })
    const data = await response.json()
    return data
}

export async function findprotype(group:string){
    let endpoint =  `${process.env.NEXT_PUBLIC_SERVER_IP}/api/propertie/findone?group=${group}`
    const response = await fetch(endpoint,{
        method: "GET",
    })
    const data = await response.json()
    return data
}
