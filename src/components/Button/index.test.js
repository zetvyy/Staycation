import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "./Button";

test("Should not allowed click button if isDisabled is present", () => {
  render(<Button isDisabled></Button>);

  expect(
    screen.getByRole("generic", { name: "span", hidden: true })
  ).toBeInTheDocument();
});

// test("Should render loading/spinner", () => {
//   render(<Button isLoading></Button>);

//   expect(screen.getByText(/loading/i)).toBeInTheDocument();
//   expect(screen.getByRole("span")).toBeInTheDocument();
// });
