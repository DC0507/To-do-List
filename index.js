import supabase from "./supabase.js";
const taskList = document.getElementById("taskList");

document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  addTaskButton.addEventListener("click", async () => {
    const taskTxt = taskInput.value.trim();
    if (taskTxt) {
        const { data, error } = await supabase.from("tasks").insert([{ task: taskTxt }]);
        if (error) {
            console.error("Error adding task:", error);
        } else {
            taskInput.value = "";
            renderTasks();
        }
    }
    });

    taskList.addEventListener("click", async (event) => {
        if (!event.target.matches(".deleteButtons[data-task-id]")) {
            return;
        }

        const taskId = event.target.dataset.taskId;
        const { error } = await supabase.from("tasks").delete().eq("id", taskId);
        if (error) {
            console.error("Error deleting task:", error);
        } else {
            renderTasks();
        }
    });

    renderTasks();
});

async function renderTasks() {
  const { data: tasks, error } = await supabase.from("tasks").select("*");
    if (error) {
        console.error("Error fetching tasks:", error);
    } else {
        taskList.innerHTML = "";
        tasks.forEach((task) => {
            const li = document.createElement("li");
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "X";
            deleteButton.classList.add("deleteButtons");
            deleteButton.dataset.taskId = task.id;
            li.textContent = task.task;
            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    }
};