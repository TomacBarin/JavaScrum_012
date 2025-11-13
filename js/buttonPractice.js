// Old stuffz0r från button practice. 

import { button } from "./components/button.js";

const consoleButton = button("Klicka för att logga i konsolen", () => {
    console.log("Knappen har klickats på.");
});

const colorBtn = button("Växla sidans färg!", () => {
    const currentColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = currentColor === "lightcoral" ? "lightgreen" : "lightcoral";
    const paraText = document.createElement("p");
    paraText.textContent = "Sidans bakgrundsfärg har ändrats, wheeee!"
    document.body.appendChild(paraText)
});


document.body.appendChild(consoleButton);
document.body.appendChild(colorBtn);

