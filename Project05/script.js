function addTask() {
    //Input box
    const input = document.querySelector("input").value;

    if (input != 0) {

        //Ul tag
        const tasks = document.querySelector("#tasks");

        //Creating lists
        const taskList = document.createElement("li");
        taskList.innerText = input;

        taskList.addEventListener("click", function () {
            this.classList.toggle("complete");
        });
        //Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add("btn");

        deleteBtn.addEventListener("click", function () {
            taskList.remove();
        });

        tasks.append(taskList);
        taskList.append(deleteBtn);

        document.querySelector("input").value = "";
    }
    else {
        alert("Task Not Assigned or Invalid");
    }
}