import Link from "next/link";

import Button from "@/components/button";

export default function Home() {
  return (
    <div className="h-screen bg-[url('./public/background.jpg')] bg-cover bg-center">
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="pb-24 text-center text-6xl font-bold text-gray-700">Simple Weather App</h1>
        <div className="flex w-[50%] flex-row gap-24">
          <Link href="/now">
            <Button>Page</Button>
          </Link>

          <Link href="/now">
            <Button>Page</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
