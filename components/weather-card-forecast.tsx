import React from "react";

import { WeatherForecastItem } from "@/app/forecast/forecast";

interface CardProps {
  weatherForeCast: WeatherForecastItem;
  additionalClassNames?: string;
}

export function WeatherCardForeCast(props: CardProps) {
  return (
    <div
      className={`max-w-sm overflow-hidden rounded-lg bg-gray-300 opacity-80 shadow-md ${props.additionalClassNames}`}
    >
      <div className="p-4">
        <h2 className="mb-2 text-xl font-semibold text-gray-700">{props.weatherForeCast.date}</h2>
        <p className="text-gray-700">{props.weatherForeCast.prediction}</p>
      </div>
    </div>
  );
}
