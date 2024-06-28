import { fetchForecast } from "@/app/forecast/fetch-forecast";
import { WeatherCardForeCast } from "@/components/weather-card-forecast";

export interface WeatherForecastItem {
  date: string;
  prediction: string;
}

export interface WeatherForecast {
  items: WeatherForecastItem[];
}

export async function Forecast() {
  const weatherData: WeatherForecast = await fetchForecast();
  return weatherData.items.map((data: WeatherForecastItem) => (
    <WeatherCardForeCast key={data.date} weatherForeCast={data} additionalClassNames="flex-1" />
  ));
}
