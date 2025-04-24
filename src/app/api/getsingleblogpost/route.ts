import { NextRequest, NextResponse } from "next/server";

import axios from "axios";
export async function GET(req: NextRequest) {
  const blogId = req.nextUrl.searchParams.get("blogId");
  const response = await axios.get(
    `https://discoverwithsac-bitspilani.in/2025/main/api/posts/${blogId}`
  );

  return NextResponse.json(response.data);
}
