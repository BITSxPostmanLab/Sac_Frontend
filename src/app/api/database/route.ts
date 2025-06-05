import { NextResponse } from "next/server";

import axios from "axios";
export async function GET() {
  const response = await axios.get(
    "https://discoverwithsac-bitspilani.in/2025/main/api/competitions/"
  );

  return NextResponse.json(response.data);
}
