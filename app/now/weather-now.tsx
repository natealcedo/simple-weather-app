import { fetchWeatherNow } from "@/app/now/fetch-weather-now";
import { WeatherData } from "@/app/now/page";
import { WeatherCardNow } from "@/components/weather-card-now";

export async function WeatherNow() {
  const weatherData = await fetchWeatherNow();
  return weatherData.items.map((data: WeatherData["items"][number], index: number) => (
    <WeatherCardNow key={index} weatherData={data} additionalClassNames="flex-1" />
  ));
}
