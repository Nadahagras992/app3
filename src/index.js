import { App } from "./components/App";
import ReactDom from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
let root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
