import { blogPosts } from "@/dummy_data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(blogPosts);
}
