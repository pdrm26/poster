import { createRoot } from "react-dom/client";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <Login />
    </>
  );
}

const container = document.getElementById("root");
if (!container) throw new Error("I couldnt find the root element (;");
const root = createRoot(container);
root.render(<App />);
