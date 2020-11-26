import React from "react"
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

import GlobalPageMenuIcon from "./GlobalPageMenuIcon";

describe("<GlobalPageMenuIcon />", () => {
  it("renders w/o issues", () => {
    const { container } = render(<GlobalPageMenuIcon />);
    expect(container).toBeInTheDocument();
  });

  it("click called navigate()", () => {
    const navigate = jest.fn();
    render(<GlobalPageMenuIcon navigate={navigate} />);
    fireEvent.click(screen.getByTestId("global-page-menu-icon"));
    expect(navigate).toHaveBeenCalled();
  });
})
