import React from "react";
import { fireEvent, render } from "@testing-library/react";

import { Button } from "@/components/button";

describe("Button", () => {
  it("renders the button with the provided text", () => {
    const { getByText } = render(<Button>Test Button</Button>);
    expect(getByText("Test Button")).toBeInTheDocument();
  });

  it("calls the onClick handler when clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Test Button</Button>);
    fireEvent.click(getByText("Test Button"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("applies the provided className", () => {
    const { container } = render(<Button className="test-class">Test Button</Button>);
    expect(container.firstChild).toHaveClass("test-class");
  });
});
