"use client";

import { invalidateNow } from "@/app/now/invalidate-now-action";
import { Button } from "@/components/button";

export function RefreshButton() {
  return <Button onClick={invalidateNow}>Refresh</Button>;
}
