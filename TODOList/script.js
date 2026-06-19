const input = document.querySelector(".input");
const btn = document.querySelector(".add");
const list = document.querySelector(".list");

let arr = [];

btn.addEventListener("click", () => {

    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const todo = {
        work: task,
        done: false
    };

    arr.push(todo);

    const div = document.createElement("div");
    div.classList.add("task");

    const li = document.createElement("li");
    li.textContent = task;

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Mark Done";

    doneBtn.addEventListener("click", () => {

        todo.done = !todo.done;

        li.classList.toggle("done");

        doneBtn.textContent = todo.done
            ? "Undo"
            : "Mark Done";

        console.log(arr);
    });

    div.appendChild(li);
    div.appendChild(doneBtn);

    list.appendChild(div);

    input.value = "";

    console.log(arr);
});