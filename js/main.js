import { createButton } from "./components/button.js";

const btn1 = createButton("Hej världen!", () => {
    alert("Tjosan!")
})

const btn2 = createButton("click", () => {
    console.log("Detta är från knapp två");
})

document.body.appendChild(btn1);
document.body.appendChild(btn2);