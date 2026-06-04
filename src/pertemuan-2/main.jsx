import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import "./Custom.css"
// import HelloWorld from "./HelloWorld";

createRoot(document.getElementById("root")).render(
  <div>
    {/* <HelloWorld/> */}
    <Container>
      <HelloWorld />
    </Container>
  </div>
);
