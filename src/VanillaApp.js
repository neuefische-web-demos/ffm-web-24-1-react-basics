export default function VanillaApp() {
    const appContainer = document.createElement("div");
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Click me";
    button.addEventListener("click", () => console.log("Hello World"));
    appContainer.append(button);

    const button2 = Button();
    appContainer.append(button2);

    // appContainer.append(Button());

    return appContainer;
}

function Button(){
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Click me";
    button.addEventListener("click", () => console.log("Hello World"));

    return button;
}
