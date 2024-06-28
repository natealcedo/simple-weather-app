import { WeatherForecast } from "@/app/forecast/forecast";

export async function fetchForecast(): Promise<WeatherForecast> {
  return fetch("https://birdsofaweather.netlify.app/api/weather/forecast", {
    next: {
      revalidate: 60,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return { items: [] };
    })
    .catch(() => {
      return { items: [] };
    });
}
