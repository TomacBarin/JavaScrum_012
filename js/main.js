import { btnFunction } from "./components/button.js";

const btn1 = btnFunction("Klicka här!", () => {
    console.log("Test för att kolla.");
})

document.body.appendChild(btn1);