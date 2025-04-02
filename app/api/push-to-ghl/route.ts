// App Router Example: app/api/push-to-ghl/route.ts
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log("✅ push-to-ghl received", data);

  return new Response(JSON.stringify({ message: "Received!", data }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}