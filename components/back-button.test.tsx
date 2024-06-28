import { usePathname } from "next/navigation";
import { render, screen } from "@testing-library/react";

import { BackButton } from "@/components/back-button";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("BackButton", () => {
  it("renders correctly when path is /now", () => {
    (usePathname as jest.Mock).mockImplementation(() => "/now");

    render(<BackButton />);
    expect(screen.getByText("Back")).toBeInTheDocument();
  });

  it("renders correctly when path is /forecast", () => {
    (usePathname as jest.Mock).mockImplementation(() => "/forecast");

    render(<BackButton />);
    expect(screen.getByText("Back")).toBeInTheDocument();
  });

  it("does not render when path is neither /now nor /forecast", () => {
    (usePathname as jest.Mock).mockImplementation(() => "/other");

    render(<BackButton />);
    expect(screen.queryByText("Back")).not.toBeInTheDocument();
  });
});
