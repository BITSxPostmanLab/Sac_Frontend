import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
export async function POST(req: NextRequest) {
  const { commentData } = await req.json();
  const response = await axios.post(
    "https://discoverwithsac-bitspilani.in/2025/main/api/comments/create/",
    commentData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(response);

  return NextResponse.json(commentData);
}
