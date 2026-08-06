// Focus Board - 基礎待辦事項邏輯
// 資料儲存在 localStorage，鍵名為 STORAGE_KEY

const STORAGE_KEY = "focus-board-tasks";

const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskListEl = document.getElementById("task-list");
const emptyStateEl = document.getElementById("empty-state");
const statTotalEl = document.getElementById("stat-total");
const statActiveEl = document.getElementById("stat-active");
const statCompletedEl = document.getElementById("stat-completed");

let tasks = [];
let nextId = 1;

function loadTasks() {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      throw new Error("儲存的資料格式不是陣列");
    }
    return parsed;
  } catch (error) {
    console.warn("Focus Board: localStorage 資料損壞，已重設為空清單。", error);
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function getNextId(taskArray) {
  const maxId = taskArray.reduce((max, task) => Math.max(max, task.id || 0), 0);
  return maxId + 1;
}

function addTask(text) {
  const trimmedText = text.trim();

  if (trimmedText === "") {
    return;
  }

  tasks.push({
    id: nextId,
    text: trimmedText,
    completed: false,
  });
  nextId += 1;

  saveTasks();
  renderTasks();
}

function toggleTaskCompleted(id) {
  const task = tasks.find((item) => item.id === id);
  if (!task) {
    return;
  }

  task.completed = !task.completed;
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((item) => item.id !== id);
  saveTasks();
  renderTasks();
}

function createTaskElement(task) {
  const item = document.createElement("li");
  item.className = "task-item" + (task.completed ? " completed" : "");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-checkbox";
  checkbox.checked = task.completed;
  checkbox.setAttribute("aria-label", `將「${task.text}」標記為${task.completed ? "未完成" : "完成"}`);
  checkbox.addEventListener("change", () => toggleTaskCompleted(task.id));

  const text = document.createElement("span");
  text.className = "task-text";
  text.textContent = task.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "btn btn-danger";
  deleteBtn.textContent = "刪除";
  deleteBtn.setAttribute("aria-label", `刪除「${task.text}」`);
  deleteBtn.addEventListener("click", () => deleteTask(task.id));

  item.appendChild(checkbox);
  item.appendChild(text);
  item.appendChild(deleteBtn);

  return item;
}

function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const active = total - completed;

  statTotalEl.textContent = total;
  statActiveEl.textContent = active;
  statCompletedEl.textContent = completed;
}

function renderTasks() {
  taskListEl.innerHTML = "";

  const hasTasks = tasks.length > 0;
  emptyStateEl.style.display = hasTasks ? "none" : "block";

  tasks.forEach((task) => {
    taskListEl.appendChild(createTaskElement(task));
  });

  updateStats();
}

function handleAddFromInput() {
  addTask(taskInput.value);
  taskInput.value = "";
  taskInput.focus();
}

function initEventListeners() {
  addButton.addEventListener("click", handleAddFromInput);

  taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddFromInput();
    }
  });
}

function init() {
  tasks = loadTasks();
  nextId = getNextId(tasks);
  initEventListeners();
  renderTasks();
}

init();
