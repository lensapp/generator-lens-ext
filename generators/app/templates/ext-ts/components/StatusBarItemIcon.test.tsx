import React from "react"
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

import StatusBarItemIcon from "./StatusBarItemIcon";

describe("<StatusBarItemIcon />", () => {
  it("renders w/o issues", () => {
    const { container } = render(<StatusBarItemIcon />);
    expect(container).toBeInTheDocument();
  });

  it("click called navigate()", () => {
    const navigate = jest.fn();
    render(<StatusBarItemIcon navigate={navigate} />);
    fireEvent.click(screen.getByTestId("statusbar-item-icon"));
    expect(navigate).toHaveBeenCalled();
    expect(screen.getByTestId("statusbar-item-icon")).toHaveStyle({ color: "rgb(255, 255, 0)" });
  });
})
