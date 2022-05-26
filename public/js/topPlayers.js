
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
        console.log(result.length)
        for (i = 0; i < result.length; i++) {
            let top = result[i].name;
            let xp = result[i].xp;
            let lvl = result[i].level;
            let el = document.createElement("li");
            el.textContent = top + " | " + lvl + " | " + xp + "xp";
            div.appendChild(el);

        }

    })



}



appendTopPlayers();