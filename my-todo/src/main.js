// ----------------------------
// Estado
// ----------------------------
let tasks = [];

// Genera ID único
const id = () => Math.random().toString(36).slice(2, 9);

// Elementos
const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");

const columns = {
  todo: document.querySelector("#todo"),
  doing: document.querySelector("#doing"),
  done: document.querySelector("#done"),
};

// ----------------------------
// Añadir tarea
// ----------------------------
function addTask() {
  if (!input.value.trim()) return;

  const task = {
    id: id(),
    text: input.value,
    column: "todo",
  };

  tasks.push(task);
  render();
  input.value = "";
}

addBtn.onclick = addTask;
input.onkeypress = (e) => e.key === "Enter" && addTask();

// ----------------------------
// Crear tarjeta
// ----------------------------
function createCard(task) {
  const div = document.createElement("div");
  div.className = "card";
  div.draggable = true;
  div.dataset.id = task.id;
  div.textContent = task.text;

  // Drag events
  div.addEventListener("dragstart", () => {
    div.classList.add("dragging");
  });
  div.addEventListener("dragend", () => {
    div.classList.remove("dragging");
  });

  return div;
}

// ----------------------------
// Render columnas
// ----------------------------
function render() {
  Object.values(columns).forEach((col) => (col.innerHTML = ""));

  tasks.forEach((task) => {
    const card = createCard(task);
    columns[task.column].appendChild(card);
  });
}

render();

// ----------------------------
// Drag & Drop
// ----------------------------
document.querySelectorAll(".list").forEach((list) => {
  list.addEventListener("dragover", (e) => {
    e.preventDefault();
    const dragging = document.querySelector(".dragging");
    list.appendChild(dragging);
  });

  list.addEventListener("drop", (e) => {
    const dragging = document.querySelector(".dragging");
    const idTask = dragging.dataset.id;
    const col = list.id;

    tasks = tasks.map((t) =>
      t.id === idTask ? { ...t, column: col } : t
    );

    render();
  });
});
