import fetchMock from "jest-fetch-mock";

import { fetchForecast } from "@/app/forecast/fetch-forecast";

fetchMock.enableMocks();

describe("fetchForecast", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("returns forecast data when the fetch response is ok", async () => {
    const mockForecast = {
      items: [
        {
          date: "2024-06-29",
          prediction: "Late morning and early afternoon thundery showers",
        },
      ],
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockForecast));

    const result = await fetchForecast();

    expect(result).toEqual(mockForecast);
    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][0]).toEqual(
      "https://birdsofaweather.netlify.app/api/weather/forecast"
    );
  });

  it("returns an empty array when the fetch response is not ok", async () => {
    fetchMock.mockRejectOnce(new Error("fake error message"));

    const result = await fetchForecast();

    expect(result).toEqual({ items: [] });
  });
});
