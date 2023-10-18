
//const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhZG1pbkB0ZXN0LmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiMTQiLCJqdGkiOiI3NTg1M2E2Mi02MTk5LTRhMWMtOWU5OS1hNWQ5NmRlZGE4ZDUiLCJleHAiOjE2OTc3NDQ1NjAsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTIzNyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDAifQ.F16VepRzAeeeXVrOHaU29WelXzXaPpJQwTMPe6iLlLA";
const token = window.localStorage.getItem("token")
const getData = async (pathUrl: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${pathUrl}`, {
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
    try {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${pathUrl}`, {
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

const DeleteData = async (id: number, pathUrl: string) => {
    try {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${pathUrl}?id=${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        })
        return response.ok;
    }
    catch (err) {
        throw new Error("message :" + err)
    }
}


export { getData, postData, DeleteData }