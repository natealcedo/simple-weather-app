import { Skeleton } from "@/components/skeleton";

export function WeatherCardSkeleton() {
  return (
    <div className="flex gap-4">
      {[1, 2, 3, 4].map((index) => (
        <Skeleton
          key={index}
          className={`h h-[100px] w-[240px] max-w-sm overflow-hidden rounded-lg bg-gray-300 opacity-80 shadow-md`}
        >
          <Skeleton className="flex flex-col gap-4 p-4">
            <Skeleton className="mb-2 h-4 w-full bg-gray-700"></Skeleton>
            <Skeleton className="h-6 w-full bg-gray-700" />
          </Skeleton>
        </Skeleton>
      ))}
    </div>
  );
}
