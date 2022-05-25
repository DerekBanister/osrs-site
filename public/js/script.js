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

function appendUser(event) {

    event.preventDefault();
    let userData = getApi();

    userData.then(function (result) {
        let skills = result.ironman.skills;
        let ironman = result.ironman.bosses;
        // console.log(result);
        let keys = Object.keys(ironman);
        let values = Object.values(ironman);
        let table = document.querySelector(".table");
        let table2 = document.querySelector(".table2");
        let resultEl = document.querySelector(".result");
        let resultEl2 = document.querySelector(".result2");
        resultEl.textContent = result.name;
        resultEl2.textContent = result.name;

        console.log(skills)
        let keys2 = Object.keys(skills);
        let values2 = Object.values(skills);
        console.log(keys2);
        console.log(values2);

        for (i = 0; i < keys.length; i++) {
            // console.log(keys[i]);
            // console.log(values[i].score);
            let li1 = document.createElement("tr");
            let li2 = document.createElement("tr");
            li1.classList.add("duck")
            li1.textContent = keys[i];
            if (values[i].score === -1) {
                li2.textContent = 0;
            } else {
                li2.textContent = values[i].score;
            }
            table.appendChild(li1);
            table.appendChild(li2);
        }

        for (i = 0; i < keys2.length; i++) {
            let li3 = document.createElement("tr");
            let li4 = document.createElement("tr");
            // li3.classList.add("duck")
            li3.textContent = keys2[i];
            li4.textContent = values2[i].level;
            table2.appendChild(li3);
            table2.appendChild(li4);
        }


    })
}


submitBtn.addEventListener("click", appendUser);