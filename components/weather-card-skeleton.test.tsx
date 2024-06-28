import React from "react";
import { render } from "@testing-library/react";

import { WeatherCardSkeleton } from "@/components/weather-card-skeleton";

describe("WeatherCardSkeleton", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<WeatherCardSkeleton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
