const addBtn = document.querySelector(".task-btn");
const form = document.getElementById("form");

const taskAdder = () => {
    const textValue = document.querySelector(".task-input").value;
    const container = document.getElementById("container");
    const task = document.createElement("div");
    task.innerHTML = `<input type='checkbox'/> ${textValue}<button>X</button>`;
    const delBtn = task.querySelectorAll("button")[0];
    const inputElement = task.querySelectorAll('input')[0];

    delBtn.style.marginLeft = "0.5rem";
    delBtn.style.borderRadius = "20%";
    delBtn.style.width = "15px";
    delBtn.style.backgroundColor ="red";
    delBtn.style.color = "white";
    delBtn.style.border = "none";

    task.style.accentColor = "green";


    inputElement.addEventListener("change", function() {
        if (inputElement.checked === true

        )
            task.classList.add("done");
        else
            task.classList.remove("done");
    });

    delBtn.addEventListener("click", function() {
        task.remove();
    });
    container.appendChild(task);

    textValue ="change";

};

form.addEventListener("submit", function(e) {
    e.preventDefault();
    taskAdder();
});


// addEventListener("keypress", function(e) {
//     if (e.key === " ") {
//         alert("space is pressed");
//     }
// });