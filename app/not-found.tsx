import Link from "next/link";

import { Button } from "@/components/button";

export default function PageNotFound() {
  return (
    <div className="h-screen bg-[url('./public/background.jpg')] bg-cover bg-center">
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h2 className="pb-24 text-center text-6xl font-bold text-gray-700">Page not found</h2>
        <Link href="/">
          <Button>Back Home</Button>
        </Link>
      </div>
    </div>
  );
}
