import fetchMock from "jest-fetch-mock";

import { fetchWeatherNow } from "@/app/now/fetch-weather-now";

fetchMock.enableMocks();

describe("fetchWeatherNow", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("returns the weather data when the fetch is successful", async () => {
    const mockData = { items: [{ temperature: 20, condition: "Sunny" }] };
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const result = await fetchWeatherNow();
    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("https://birdsofaweather.netlify.app/api/weather/now", {
      next: {
        revalidate: 60,
      },
    });
  });

  it("returns an empty items array when the fetch is not successful", async () => {
    fetchMock.mockRejectOnce(new Error("Fetch failed"));

    const result = await fetchWeatherNow();
    expect(result).toEqual({ items: [] });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("https://birdsofaweather.netlify.app/api/weather/now", {
      next: {
        revalidate: 60,
      },
    });
  });
});
