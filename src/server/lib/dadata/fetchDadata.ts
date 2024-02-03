export async function dadataFetch(query: string) {
    const url = process.env.DADATA_ADDRESS_API;
    const token = process.env.DADATA_API_KEY;

    const options: RequestInit = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({query: query})
    }

    if (url) {
        const response = await fetch(url, options);
        console.log(response.text().then())
        return response.text()
    }



}

// .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log("error", error));