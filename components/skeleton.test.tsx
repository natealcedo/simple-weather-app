import React from "react";
import { render } from "@testing-library/react";

import { Skeleton } from "@/components/skeleton";

describe("Skeleton", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<Skeleton className="test-class" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
