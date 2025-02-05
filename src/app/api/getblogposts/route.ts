import { blogPosts } from "@/dummy_data";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json(blogPosts);
}
