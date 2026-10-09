const mainTitle = document.getElementById("main-title");
const themeBtn = document.getElementById("theme-btn");
const itemList = document.getElementById("item-list");
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");

let count = 0;

const addItem = () => {
    count++;
    const li = document.createElement("li");
    li.className = "flex justify-between items-center p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 shadow-sm transition-colors duration-300";
    li.innerHTML = `
        <span class="font-medium text-zinc-800 dark:text-zinc-200">Item #${count}</span>
        <button class="delete-btn text-rose-500 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 font-bold transition">Delete</button>
    `;

    itemList.appendChild(li);
}

itemList.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("delete-btn")) {
        target.closest("li")?.remove();
    }
});

addBtn.addEventListener("click", addItem);

clearBtn.addEventListener("click", () => {
    itemList.innerHTML = "";
    count = 0;
})

mainTitle.addEventListener("mouseover", () => {
    mainTitle.classList.add("scale-110", "rotate-2", "drop-shadow-[0_0_15px_rgba(99,102,241,0.6)]", "cursor-pointer");
})

mainTitle.addEventListener("mouseout", () => {
    mainTitle.classList.remove("scale-110", "rotate-2", "drop-shadow-[0_0_15px_rgba(99,102,241,0.6)]");
})

themeBtn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    themeBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
})