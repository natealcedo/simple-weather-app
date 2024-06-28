import { WeatherData } from "@/app/now/page";

// Add a recursive function to retry the fetch when it fails
async function fetchWithRetry(url: string, retries: number = 5): Promise<Response> {
  try {
    const response = await fetch(url, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok && retries > 0) {
      return fetchWithRetry(url, retries - 1);
    }

    return response;
  } catch (error) {
    if (retries > 0) {
      return fetchWithRetry(url, retries - 1);
    }
    throw error;
  }
}

export async function fetchWeatherNow(): Promise<WeatherData> {
  return fetchWithRetry("https://birdsofaweather.netlify.app/api/weather/now")
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
