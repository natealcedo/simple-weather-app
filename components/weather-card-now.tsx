import React from "react";

import { WeatherData } from "@/app/now/page";

interface CardProps {
  weatherData: WeatherData["items"][number];
  additionalClassNames?: string;
}

export function WeatherCardNow(props: CardProps) {
  return (
    <div
      className={`max-w-sm overflow-hidden rounded-lg bg-gray-300 opacity-80 shadow-md ${props.additionalClassNames}`}
    >
      <div className="p-4">
        <h2 className="mb-2 text-xl font-semibold text-gray-700">{props.weatherData.area}</h2>
        <p className="text-gray-700">{props.weatherData.forecast}</p>
      </div>
    </div>
  );
}
