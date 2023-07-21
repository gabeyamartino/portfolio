import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// import { JSDOM } from "jsdom";
import Projects from "../components/Projects";
import React from "react";

test("clicking on project link button opens new tab", () => {
  // const dom = new JSDOM();
  // global.document = dom.window.document;

  // render(<Projects />);

  // const button = screen.getByRole("button");
  // button.click();

  // const newTabOpened = dom.window.open.calledOnce;
  // expect(newTabOpened).toBe(true);

  render(<Projects />);
  const button = screen.getByText("Live Link");

  // Mock the `window.open` method
  const openMock = jest.spyOn(window, "open").mockImplementation();

  // Simulate a button click
  userEvent.click(button);

  // Assert that `window.open` was called with the expected URL and "_blank" target
  expect(openMock).toHaveBeenCalledWith("http://54.160.94.40:3000/", "_blank");

  // Clean up the mock
  openMock.mockRestore();
});
