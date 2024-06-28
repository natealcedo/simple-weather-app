import React from "react";
import { render } from "@testing-library/react";

import { WeatherCardForeCast } from "@/components/weather-card-forecast";

describe("WeatherCardForeCast", () => {
  it("renders the forecast card with the provided data", () => {
    const mockData = { date: "2022-12-31", prediction: "Sunny" };
    const { getByText } = render(
      <WeatherCardForeCast weatherForeCast={mockData} additionalClassNames="test-class" />
    );

    expect(getByText("2022-12-31")).toBeInTheDocument();
    expect(getByText("Sunny")).toBeInTheDocument();
  });
});
