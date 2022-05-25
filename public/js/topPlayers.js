
let div = document.querySelector(".topDiv")

async function getTopPlayers() {

    const response = await fetch("/info/top", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    });

    let topPlayers = await response.json()
    return topPlayers;
}

function appendTopPlayers() {
    let top = getTopPlayers();

    top.then(function (result) {
        console.log(result);
        for (i = 0; i < top.length; i++) {
            let top = result[i].name;
            let el = document.createElement("li");
            el.textContent = top;
            div.appendChild(el);
        }

    })



}



appendTopPlayers();