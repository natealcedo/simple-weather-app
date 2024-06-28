import { Suspense } from "react";
import Link from "next/link";

import { Forecast } from "@/app/forecast/forecast";
import { Button } from "@/components/button";
import { WeatherCardSkeleton } from "@/components/weather-card-skeleton";

export interface WeatherData {
  area: string;
  forecast: string;
}

export default function Page() {
  return (
    <div>
      <main>
        <div className="h-screen bg-[url('./public/background.jpg')] bg-cover bg-center">
          <div className="absolute left-4 top-4">
            <Link href="/">
              <Button>Back</Button>
            </Link>
          </div>
          <div className="flex min-h-screen flex-col items-center justify-center">
            <h1 className="pb-24 text-center text-6xl font-bold text-gray-700">
              Forecast for the next 4 days
            </h1>
            <div className="flex w-[60%] flex-row gap-4">
              <Suspense fallback={<WeatherCardSkeleton />}>
                <Forecast />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
