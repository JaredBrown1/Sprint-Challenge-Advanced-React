import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "@testing-library/react";
import DarkMode from "./components/DarkModeButton";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("has dark mode", () => {
  const container = render(<App />);

  container.getByText(/Dark Mode/);
});
