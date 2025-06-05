import { NextResponse } from "next/server";

import axios from "axios";
export async function GET() {
  const response = await axios.get(
    "https://discoverwithsac-bitspilani.in/2025/main/api/research-interns/"
  );
console.log(response.data)
  return NextResponse.json(response.data);
}
