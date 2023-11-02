// import choo
import choo from "choo";
import machine from "./stores/machine.js";

// initialize choo
const app = choo({ hash: true });
app.use(machine);

// import a template
import mainView from "./pages/main.js";
import cameraView from "./pages/camera.js";

app.route("/*", mainView);
app.route("/", mainView);
app.route("/camera", cameraView);
app.route("/camera/:video", cameraView);

// start app
app.mount("#choomount");
