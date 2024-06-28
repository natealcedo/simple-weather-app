import { WeatherData } from "@/app/now/page";

export async function fetchWeatherNow(): Promise<WeatherData> {
  return fetch("https://birdsofaweather.netlify.app/api/weather/now", {
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
      return {
        items: [],
      };
    });
}
