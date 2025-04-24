import { NextRequest, NextResponse } from "next/server";

import axios from "axios";
export async function GET(req: NextRequest) {
  const eventId = req.nextUrl.searchParams.get("eventId");
  const response = await axios.get(
    `https://discoverwithsac-bitspilani.in/2025/main/api/events/${eventId}`
  );

  return NextResponse.json(response.data);
}
