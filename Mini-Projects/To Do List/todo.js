const taskinput = document.getElementById("taskinput");
const addbutton = document.getElementById("addbutton");
const tasklist = document.getElementById("tasklist");
addbutton.addEventListener(click,() => {
    const tasktext = taskinput.value;
    if (tasktext === "") {
        alert("Please enter a task");
        return;
        }
    const li = document.createElement("li"); // This will create a list item
    li.textContent = tasktext;
    }
)