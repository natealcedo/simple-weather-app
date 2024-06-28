import { fetchWeatherNow } from "@/app/now/fetch-weather-now";
import { WeatherData } from "@/app/now/page";
import { RefreshButton } from "@/app/now/refresh-button";
import { WeatherCardNow } from "@/components/weather-card-now";

export async function WeatherNow() {
  const weatherData = await fetchWeatherNow();
  if (weatherData.items.length === 0) {
    return (
      <div className="flex w-full flex-col justify-center gap-4">
        <p className="text-center text-4xl text-gray-700">
          There was an error fetching the weather data.
        </p>
        <RefreshButton />
      </div>
    );
  }
  return weatherData.items.map((data: WeatherData["items"][number], index: number) => (
    <WeatherCardNow key={index} weatherData={data} additionalClassNames="flex-1" />
  ));
}
