import { Suspense } from "react";

import { WeatherNow } from "@/app/now/weather-now";
import { WeatherCardSkeleton } from "@/components/weather-card-skeleton";

export interface WeatherData {
  items: {
    area: string;
    forecast: string;
  }[];
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="pb-24 text-center text-6xl font-bold text-gray-700">
        What&apos;s it like outside?
      </h1>
      <div className="flex w-[60%] flex-row gap-4">
        <Suspense fallback={<WeatherCardSkeleton />}>
          <WeatherNow />
        </Suspense>
      </div>
    </div>
  );
}
