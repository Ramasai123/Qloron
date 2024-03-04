document.querySelector("form").addEventListener("submit", todoApp);

let taskArr = [];

function todoApp(event) {
    event.preventDefault();
    let taskName = document.querySelector("#task").value;
    let priority = document.querySelector("#priority").value;

    let taskObj = {
        task: taskName,
        prior: priority
    };
    taskArr.push(taskObj);
    displayTable(taskArr);
}

document.getElementById("all").addEventListener("change", filterTasks);

function filterTasks() {
    let priorityFilter = document.getElementById("all").value;
    let rows = document.querySelectorAll("tbody tr");

    rows.forEach(row => {
        let priority = row.querySelector("td:nth-child(2)").innerText;
        if (priority === priorityFilter || priorityFilter === "all") {
            row.style.display = "table-row";
        } else {
            row.style.display = "none";
        }
    });
}

function displayTable(taskArr) {
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    taskArr.forEach(function (elem) {
        let row = document.createElement("tr");
        let col1 = document.createElement("td");
        col1.innerText = elem.task;
        let col2 = document.createElement("td");
        col2.innerText = elem.prior;
        if(elem.prior==="High"){
            col2.style.background="red"
        }else{
            col2.style.background="green"
        }
        let col3 = document.createElement("td");
        col3.innerText = "Delete";
        col3.addEventListener("click", function(event) {
            event.target.parentNode.remove();
        });
        col3.style.color = "red";

        row.append(col1, col2, col3);
        tbody.appendChild(row);
    });
}
