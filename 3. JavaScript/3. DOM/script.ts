const title = document.getElementById("title") as HTMLElement | null;

if (title) {
    title.style.color = "green";
    title.style.textAlign = "center";
}

const titles = document.getElementsByTagName("h2") as HTMLCollectionOf<HTMLElement>;

for (const el of titles) {
    el.style.color = "red";
    el.style.textAlign = "center";
    el.innerText = "Bye"
}

const special = document.getElementsByClassName("special") as HTMLCollectionOf<HTMLElement>;

for (const el of special) {
    el.style.color = "blue";
}

const section: HTMLDivElement = document.createElement("div");

for (let i = 0; i < 5; i++) {
    const p: HTMLParagraphElement = document.createElement("p");
    p.innerText = `${i} Item`;
    p.style.textAlign = "center";
    section.appendChild(p);
}

document.body.appendChild(section);

const anchor: HTMLAnchorElement = document.createElement("a");
anchor.innerHTML = "Google";
anchor.href = "https://www.google.ca";
anchor.target = "_blank";
anchor.style.display = "block";

document.body.appendChild(anchor);

const button: HTMLButtonElement = document.createElement("button");
button.innerHTML = "Hide List";
button.style.marginTop = "2rem";

let show: boolean = true;

button.addEventListener("click", () => {
  show = !show;
  section.style.display = show ? "block" : "none";
  button.innerHTML = show ? "Hide List" : "Show List";
});

document.body.appendChild(button);

const button2: HTMLButtonElement = document.createElement("button");
button2.innerHTML = "Enlarge Text";

button2.addEventListener("click", () => {
  if (title) {
    title.style.cssText =
      "font-size: 100px; transition: all 2s; text-align: center; color: green; transform: rotate(360deg)";
  }
});

document.body.appendChild(button2);