import { createRoot } from "react-dom/client";

export default function App() {
  return <div>App</div>;
}

const container = document.getElementById("root");
if (!container) throw new Error("I couldnt find the root element (;");
const root = createRoot(container);
root.render(<App />);
