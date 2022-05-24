// https://polar-badlands-45238.herokuapp.com/



//for now, will be user search input
let value = `ddbo`;

async function getApi() {
    const response = await fetch(`/stats/${value}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    let data = await response.json()
    console.log(data);
    return data;
}

getApi();