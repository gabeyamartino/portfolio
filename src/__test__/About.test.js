import { render, getByText, toBeInTheDocument } from "@testing-library/react";
import About from "../components/About";
import React from "react";

test("about component renders", () => {
  const { getByText } = render(<About />);

  expect(
    getByText(
      "I'm a full-stack web developer with a passion for design and utility."
    )
  ).toBeInTheDocument();
});
