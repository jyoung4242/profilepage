import "./style.css";
import { UI } from "peasy-ui";
import { model } from "./state/state";

let myApp = document.createElement("div");
document.body.appendChild(myApp);

let template = `
    <div>Hello World</div>
`;

UI.create(myApp, template, model);
setInterval(() => UI.update(), 1000 / 60);
