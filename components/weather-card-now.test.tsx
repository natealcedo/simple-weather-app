import React from "react";
import { render } from "@testing-library/react";

import { WeatherCardNow } from "@/components/weather-card-now";

describe("WeatherCardNow", () => {
  it("renders the weather card with the provided data", () => {
    const mockData = { area: "San Francisco", forecast: "Sunny" };
    const { getByText } = render(
      <WeatherCardNow weatherData={mockData} additionalClassNames="test-class" />
    );

    expect(getByText("San Francisco")).toBeInTheDocument();
    expect(getByText("Sunny")).toBeInTheDocument();
  });
});
