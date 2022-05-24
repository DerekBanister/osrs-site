// https://polar-badlands-45238.herokuapp.com/

let submitBtn = document.querySelector(".submitBtn");

function checkForm() {
    var form = document.forms[0];
    var selectElement = form.querySelector('.value');
    var selectedValue = selectElement.value;

    return selectedValue;
}

async function getApi() {
    // console.log(checkForm());
    let input = checkForm();
    const response = await fetch(`/stats/${input}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    });

    let hiscore = await response.json()
    // console.log(data);
    return hiscore;
}

function appendData(event) {
    event.preventDefault();
    // window.location.replace("http://localhost:3001/results");
    let userData = getApi();

    userData.then(function (result) {
        // console.log(result);
        // console.log(result.ironman.bosses);
        let ironman = result.ironman.bosses;
        let keys = Object.keys(ironman);
        let values = Object.values(ironman);
        let table = document.querySelector(".table");
        // let table2 = document.querySelector(".k");


        for (i = 0; i < keys.length; i++) {
            // console.log(keys[i]);
            // console.log(values[i].score);
            let li1 = document.createElement("tr");
            let li2 = document.createElement("tr");
            li1.textContent = keys[i];
            li2.textContent = values[i].score;
            table.appendChild(li1);
            table.appendChild(li2);

        }

    })
}


submitBtn.addEventListener("click", appendData);