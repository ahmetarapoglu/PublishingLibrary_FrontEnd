import { GetToken } from "./getToken";

const getData = async (pathUrl: string) => {
    const token = await GetToken()
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${pathUrl}`, {
            cache: 'no-store',
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        })
        const status = response.ok;
        const data = await response.json();

        return { data, status };
    }
    catch (err) {
        throw new Error("message :" + err)
    }
}

const postData = async (request: any, pathUrl: string) => {
    const token = await GetToken()
    try {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${pathUrl}`, {
            cache: 'no-store',
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify(request)
        })
        const status = response.ok;
        const data = await response.json();
        return { data, status };
    }
    catch (err) {
        throw new Error("message :" + err)
    }
}

const deleteData = async (id: number, pathUrl: string) => {
    const token = await GetToken()
    try {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${pathUrl}?id=${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        })
        return response.ok;
    }
    catch (err) {
        throw new Error("message :" + err)
    }
}



export { getData, postData, deleteData }