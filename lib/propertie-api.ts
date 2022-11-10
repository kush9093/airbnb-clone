const serverAddress = "http://localhost:3000";


export async function findpropertie(){
    let endpoint = serverAddress + `/api/propertie/findall`
    const response = await fetch(endpoint,{
        method: "GET",
    })
    const data = await response.json()
    return data
}

export async function findprotype(group:string){
    let endpoint = serverAddress + `/api/propertie/findone?group=${group}`
    const response = await fetch(endpoint,{
        method: "GET",
    })
    const data = await response.json()
    return data
}
