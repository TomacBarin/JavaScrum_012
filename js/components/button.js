export function button(buttonText, onclick) {
    const btn = document.createElement("button");
    btn.textContent = buttonText;
    btn.addEventListener("click", onclick);
    return btn
}